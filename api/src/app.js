import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import { env } from './config/env.js';
import { handleError, handleRouteNotFound } from './middleware/errorHandler.js';
import { healthRoutes } from './routes/healthRoutes.js';

export function createApp() {
  const app = express();

  app.use(helmet());
  app.use(cors({ origin: env.corsOrigin }));
  app.use(express.json());

  app.use('/api/health', healthRoutes);

  app.use(handleRouteNotFound);
  app.use(handleError);

  return app;
}
