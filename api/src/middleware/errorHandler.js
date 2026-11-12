import { ApiError } from '../utils/ApiError.js';

export function handleRouteNotFound(req, res, next) {
  next(new ApiError(404, `Route not found: ${req.method} ${req.originalUrl}`));
}

// Express recognises an error handler by its four parameters, so `next` must stay.
export function handleError(error, req, res, next) {
  if (error instanceof ApiError) {
    return res.status(error.statusCode).json({ error: { message: error.message } });
  }

  if (error.type === 'entity.parse.failed') {
    return res.status(400).json({ error: { message: 'Request body is not valid JSON' } });
  }

  console.error(error);
  return res.status(500).json({ error: { message: 'Internal server error' } });
}
