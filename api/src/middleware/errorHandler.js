import { ApiError } from '../utils/ApiError.js';

function sendError(res, statusCode, message) {
  res.status(statusCode).json({ error: { statusCode, message } });
}

export function handleRouteNotFound(req, res, next) {
  next(new ApiError(404, `Route not found: ${req.method} ${req.originalUrl}`));
}

// Express recognises an error handler by its four parameters, so `next` must stay.
export function handleError(error, req, res, next) {
  if (error instanceof ApiError) {
    return sendError(res, error.statusCode, error.message);
  }

  if (error.type === 'entity.parse.failed') {
    return sendError(res, 400, 'Request body is not valid JSON');
  }

  console.error(error);
  return sendError(res, 500, 'Internal server error');
}
