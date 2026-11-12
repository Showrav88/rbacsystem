# Secure Note-Taking Application

A REST API with JWT authentication and role-based access control, plus a functional frontend.

- `api/` — Node.js, Express, MongoDB with Mongoose

## Run the API locally

```bash
cd api
npm install
cp .env.example .env   # then put your MongoDB connection string in .env
npm run dev
```

Check that it is running: <http://localhost:4000/api/health>

## API structure

```
api/src/
  server.js      connects to the database, then starts the HTTP server
  app.js         builds the Express app: middleware, routes, error handling
  config/        environment variables and the database connection
  routes/        maps URLs to handlers
  middleware/    code that runs before or after route handlers
  utils/         small shared helpers
```
