import { useEffect, useState, type FormEvent } from 'react'
import styles from './AccountDeletionPortal.module.css'

type DeletionStatus = 'pending' | 'approved' | 'on_hold' | 'completed'

type DeletionHold = {
  id: string
  basis: string
  reason: string
  reference: string | null
  expires_at: string
}

type DeletionRequest = {
  id: string
  status: DeletionStatus
  requested_at: string
  approved_at: string | null
  completed_at: string | null
  blockers: string[]
  holds: DeletionHold[]
}

type OtpVerifyResponse = {
  tokens?: {
    access_token?: string
  }
}

class ApiError extends Error {
  constructor(
    message: string,
    readonly status: number,
  ) {
    super(message)
  }
}

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? '').trim().replace(/\/+$/, '')
const SESSION_TOKEN_KEY = 'kaaamnow.deletion.accessToken'

const STATUS_LABELS: Record<DeletionStatus, string> = {
  pending: 'Under review',
  approved: 'Approved',
  on_hold: 'On hold',
  completed: 'Completed',
}

function getStoredToken() {
  try {
    return window.sessionStorage.getItem(SESSION_TOKEN_KEY)
  } catch {
    return null
  }
}

function clearStoredToken() {
  try {
    window.sessionStorage.removeItem(SESSION_TOKEN_KEY)
  } catch {
    // The in-memory session is still cleared when storage is unavailable.
  }
}

function formatDate(value: string | null) {
  if (!value) return null
  const date = new Date(value)
  return Number.isNaN(date.getTime())
    ? value
    : new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' }).format(date)
}

async function apiRequest<T>(
  path: string,
  options: RequestInit = {},
  accessToken?: string,
): Promise<T | null> {
  if (!API_BASE_URL) {
    throw new Error('The account portal is not configured yet. Please try again later.')
  }

  const headers = new Headers(options.headers)
  if (options.body) headers.set('Content-Type', 'application/json')
  if (accessToken) headers.set('Authorization', `Bearer ${accessToken}`)

  let response: Response
  try {
    response = await fetch(`${API_BASE_URL}${path}`, { ...options, headers })
  } catch {
    throw new Error('Could not reach KaaamNow. Check your connection and try again.')
  }

  const payload: unknown = await response.json().catch(() => null)
  if (!response.ok) {
    const message =
      typeof payload === 'object' && payload !== null && 'detail' in payload
        ? String((payload as { detail: unknown }).detail)
        : `The request could not be completed (${response.status}).`
    throw new ApiError(message, response.status)
  }
  return payload as T | null
}

export function AccountDeletionPortal() {
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [codeSent, setCodeSent] = useState(false)
  const [accessToken, setAccessToken] = useState<string | null>(getStoredToken)
  const [deletionRequest, setDeletionRequest] = useState<DeletionRequest | null>(null)
  const [acknowledged, setAcknowledged] = useState(false)
  const [busy, setBusy] = useState(false)
  const [loadingStatus, setLoadingStatus] = useState(false)
  const [error, setError] = useState('')
  const [notice, setNotice] = useState('')

  const signOut = () => {
    clearStoredToken()
    setAccessToken(null)
    setDeletionRequest(null)
    setCode('')
    setCodeSent(false)
    setAcknowledged(false)
    setNotice('')
  }

  const loadCurrentRequest = async (token: string) => {
    setLoadingStatus(true)
    setError('')
    try {
      const current = await apiRequest<DeletionRequest>(
        '/api/v1/me/deletion-requests/current',
        { method: 'GET' },
        token,
      )
      setDeletionRequest(current)
      return current
    } catch (requestError) {
      if (requestError instanceof ApiError && requestError.status === 404) {
        setDeletionRequest(null)
        return null
      }
      if (requestError instanceof ApiError && requestError.status === 401) {
        signOut()
        setError('Your sign-in has expired. Sign in again to check your request.')
      } else {
        setError(
          requestError instanceof Error
            ? requestError.message
            : 'Could not load your account deletion status.',
        )
      }
      return false
    } finally {
      setLoadingStatus(false)
    }
  }

  useEffect(() => {
    if (accessToken) void loadCurrentRequest(accessToken)
  }, [accessToken])

  const handleSendCode = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setNotice('')
    const normalizedPhone = phone.replace(/[\s()-]/g, '')
    if (!/^\+?\d{8,20}$/.test(normalizedPhone)) {
      setError('Enter a valid phone number with its country code.')
      return
    }

    setBusy(true)
    try {
      await apiRequest('/api/v1/auth/otp/send', {
        method: 'POST',
        body: JSON.stringify({ phone: normalizedPhone, intent: 'sign_in' }),
      })
      setPhone(normalizedPhone)
      setCodeSent(true)
      setNotice('A sign-in code was sent if this number has an account.')
    } catch (sendError) {
      setError(
        sendError instanceof Error ? sendError.message : 'Could not send a sign-in code.',
      )
    } finally {
      setBusy(false)
    }
  }

  const handleVerifyCode = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setNotice('')
    if (!/^\d{4,8}$/.test(code)) {
      setError('Enter the numeric code you received.')
      return
    }

    setBusy(true)
    try {
      const result = await apiRequest<OtpVerifyResponse>('/api/v1/auth/otp/verify', {
        method: 'POST',
        body: JSON.stringify({ phone, code }),
      })
      const token = result?.tokens?.access_token
      if (!token) {
        throw new Error('Sign-in could not be completed. Please request a new code.')
      }
      try {
        window.sessionStorage.setItem(SESSION_TOKEN_KEY, token)
      } catch {
        // Keep the access token in component memory if session storage is unavailable.
      }
      setAccessToken(token)
    } catch (verifyError) {
      setError(
        verifyError instanceof Error ? verifyError.message : 'Could not verify the sign-in code.',
      )
    } finally {
      setBusy(false)
    }
  }

  const handleDeletionRequest = async () => {
    if (!accessToken || !acknowledged) return
    setBusy(true)
    setError('')
    setNotice('')
    try {
      await apiRequest('/api/v1/me/deletion-requests', { method: 'POST' }, accessToken)
    } catch (requestError) {
      if (requestError instanceof ApiError && requestError.status === 401) {
        signOut()
        setError('Your sign-in has expired. Sign in again before making a request.')
      } else {
        setError(
          requestError instanceof Error
            ? requestError.message
            : 'Could not submit your account deletion request.',
        )
      }
      setBusy(false)
      return
    }

    setAcknowledged(false)
    const refreshed = await loadCurrentRequest(accessToken)
    if (refreshed) {
      setNotice(
        'Your request was submitted. The status shown below is from the account service.',
      )
    } else if (refreshed === null) {
      setNotice(
        'The request was accepted, but no current status was returned. Try refreshing the status.',
      )
    } else {
      setNotice(
        'The request was accepted, but its current status could not be loaded. Try refreshing the status.',
      )
    }
    setBusy(false)
  }

  const status = deletionRequest?.status
  const approvedDate = formatDate(deletionRequest?.approved_at ?? null)
  const completedDate = formatDate(deletionRequest?.completed_at ?? null)

  return (
    <div className={styles.page}>
      <header className={`container ${styles.header}`}>
        <a href="/" className={styles.brand} aria-label="KaaamNow home">
          Kaaam<span>Now</span>
        </a>
        <a href="/" className={styles.backLink}>Back to KaaamNow</a>
      </header>

      <main className={`container ${styles.main}`}>
        <a href="/" className={styles.backMobile}>← Back to KaaamNow</a>
        <div className={styles.intro}>
          <p className={styles.eyebrow}>Account support</p>
          <h1>Account deletion</h1>
          <p className={styles.lede}>
            Sign in with the phone number on your KaaamNow customer, business, or worker account
            to request deletion or check an existing request.
          </p>
        </div>

        <section className={styles.notice} aria-labelledby="retention-title">
          <h2 id="retention-title">What to expect</h2>
          <p>
            Requests are reviewed; data not legally required will be deleted/anonymised; pending
            bookings, refunds, legal obligations, fraud/disputes may require retention/delay.
          </p>
        </section>

        {!API_BASE_URL && (
          <p className={styles.error} role="alert">
            The account portal is not configured yet. Please try again later.
          </p>
        )}
        {error && <p className={styles.error} role="alert">{error}</p>}
        {notice && <p className={styles.success} role="status">{notice}</p>}

        {!accessToken ? (
          <section className={styles.panel} aria-labelledby="signin-title">
            <div className={styles.panelHeading}>
              <span className={styles.step}>01</span>
              <div>
                <h2 id="signin-title">Verify it’s your account</h2>
                <p>We’ll send a one-time sign-in code to your registered phone number.</p>
              </div>
            </div>

            {!codeSent ? (
              <form className={styles.form} onSubmit={handleSendCode}>
                <label htmlFor="phone">Phone number</label>
                <input
                  autoComplete="tel"
                  id="phone"
                  inputMode="tel"
                  maxLength={24}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="+91 98765 43210"
                  required
                  type="tel"
                  value={phone}
                />
                <p className={styles.fieldHint}>Include your country code, for example +91.</p>
                <button className={styles.primaryButton} disabled={busy || !API_BASE_URL} type="submit">
                  {busy ? 'Sending code…' : 'Send sign-in code'}
                </button>
              </form>
            ) : (
              <form className={styles.form} onSubmit={handleVerifyCode}>
                <p className={styles.codeHelp}>Enter the code sent to {phone}.</p>
                <label htmlFor="code">One-time code</label>
                <input
                  autoComplete="one-time-code"
                  autoFocus
                  id="code"
                  inputMode="numeric"
                  maxLength={8}
                  onChange={(event) => setCode(event.target.value)}
                  pattern="[0-9]{4,8}"
                  required
                  type="text"
                  value={code}
                />
                <button className={styles.primaryButton} disabled={busy || !API_BASE_URL} type="submit">
                  {busy ? 'Verifying…' : 'Verify and continue'}
                </button>
                <button
                  className={styles.textButton}
                  disabled={busy}
                  onClick={() => {
                    setCodeSent(false)
                    setCode('')
                    setError('')
                  }}
                  type="button"
                >
                  Use a different phone number
                </button>
              </form>
            )}
          </section>
        ) : (
          <section className={styles.panel} aria-labelledby="request-title">
            <div className={styles.panelHeading}>
              <span className={styles.step}>02</span>
              <div>
                <h2 id="request-title">Your deletion request</h2>
                <p>Your account is verified. Your request and status are private to this session.</p>
              </div>
            </div>

            {loadingStatus ? (
              <p className={styles.loading} role="status">Checking your account deletion status…</p>
            ) : deletionRequest ? (
              <div className={styles.requestDetails}>
                <div className={styles.statusHeader}>
                  <div>
                    <p className={styles.detailLabel}>Current status</p>
                    <h3 className={`${styles.status} ${styles[`status_${status}`]}`}>
                      {status ? STATUS_LABELS[status] : 'Status unavailable'}
                    </h3>
                  </div>
                  <button
                    className={styles.textButton}
                    disabled={loadingStatus}
                    onClick={() => void loadCurrentRequest(accessToken)}
                    type="button"
                  >
                    Refresh status
                  </button>
                </div>
                <dl className={styles.dates}>
                  <div>
                    <dt>Requested</dt>
                    <dd>{formatDate(deletionRequest.requested_at) ?? 'Not provided'}</dd>
                  </div>
                  {approvedDate && <div><dt>Approved</dt><dd>{approvedDate}</dd></div>}
                  {completedDate && <div><dt>Completed</dt><dd>{completedDate}</dd></div>}
                </dl>

                {deletionRequest.blockers.length > 0 && (
                  <div className={styles.subsection}>
                    <h3>Items that may affect your request</h3>
                    <ul className={styles.list}>
                      {deletionRequest.blockers.map((blocker, index) => (
                        <li key={`${blocker}-${index}`}>{blocker}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {deletionRequest.holds.length > 0 && (
                  <div className={styles.subsection}>
                    <h3>Holds and review details</h3>
                    <ul className={styles.holds}>
                      {deletionRequest.holds.map((hold) => (
                        <li key={hold.id}>
                          <p className={styles.holdBasis}>{hold.basis}</p>
                          <p>{hold.reason}</p>
                          {hold.reference && <p className={styles.reference}>Reference: {hold.reference}</p>}
                          <p className={styles.expiry}>
                            Hold expiry: {formatDate(hold.expires_at) ?? 'Not provided'}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {status === 'completed' && (
                  <p className={styles.completedNote}>
                    This deletion request is marked completed by the account service.
                  </p>
                )}
              </div>
            ) : (
              <div className={styles.newRequest}>
                <p>
                  No current deletion request was found for this account. You can submit one below.
                </p>
                <label className={styles.confirmation}>
                  <input
                    checked={acknowledged}
                    onChange={(event) => setAcknowledged(event.target.checked)}
                    type="checkbox"
                  />
                  <span>
                    I want to request deletion of this KaaamNow account. I understand the review
                    and retention information above.
                  </span>
                </label>
                <button
                  className={styles.primaryButton}
                  disabled={busy || loadingStatus || !acknowledged || !API_BASE_URL}
                  onClick={() => void handleDeletionRequest()}
                  type="button"
                >
                  {busy ? 'Submitting request…' : 'Submit deletion request'}
                </button>
              </div>
            )}

            <button className={styles.signOut} onClick={signOut} type="button">
              Sign out
            </button>
          </section>
        )}

        <p className={styles.privacyNote}>
          Your access token stays in this tab’s session storage and is removed when you sign out.
        </p>
      </main>
    </div>
  )
}
