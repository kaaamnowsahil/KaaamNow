# KaaamNow

KaaamNow is an on-demand workforce marketplace connecting businesses with dependable people for hourly shifts, daily jobs, and flexible multi-day assignments.

## Getting started

Install dependencies:

```sh
npm install
```

There are two env files, both git-ignored. `.env.dev` points at the local backend and is used by `npm run dev` and `npm run build:dev`. `.env.prod` points at the deployed backend and is used by `npm run dev:prod` and `npm run build`.

Start the development server against the local API:

```sh
npm run dev
```

Start it against the production API:

```sh
npm run dev:prod
```

Build for production:

```sh
npm run build
```

Preview a production build locally:

```sh
npm run preview
```

## Account deletion portal

The public account deletion page is available at `/account-deletion`. It uses the backend API
for passwordless sign-in and deletion-request status. Set `VITE_API_BASE_URL` to the backend
origin for the deployment (for example, a local development API origin); the site does not
provide a production URL by default.

The portal sends one-time codes for sign-in and keeps the access token in memory and
`sessionStorage` for the current browser tab. It does not store tokens in `localStorage`.

## Tech stack

- React
- TypeScript
- Vite
- Framer Motion
