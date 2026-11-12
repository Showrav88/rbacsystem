import { Router } from 'express';
import { isDatabaseConnected } from '../config/database.js';

export const healthRoutes = Router();

healthRoutes.get('/', (req, res) => {
  const databaseConnected = isDatabaseConnected();

  res.status(databaseConnected ? 200 : 503).json({
    status: databaseConnected ? 'ok' : 'unavailable',
    database: databaseConnected ? 'connected' : 'disconnected',
  });
});
