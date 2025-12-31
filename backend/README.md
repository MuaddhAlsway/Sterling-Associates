# Backend (Paraflow)

Quick notes to start the backend for local development:

- Install dependencies: `npm install`
- Start dev server: `npm run dev` (uses `nodemon src/index.js`)
- Environment variables:
  - `MONGO_URI` - optional. Defaults to `mongodb://localhost:27017/paraflow`.
  - `ADMIN_EMAIL` / `ADMIN_PASSWORD` - credentials used by server-side login helper (defaults to `admin@example.com` / `password123`).

Notes:

- If MongoDB is not running, the server will log a warning and continue in degraded mode (some endpoints that require DB will return errors). Running a local MongoDB instance or setting `MONGO_URI` is recommended.
- The project currently depends on `multer@1.x` which has known vulnerabilities; consider upgrading to `multer@2.x` and adjusting the upload handling.
