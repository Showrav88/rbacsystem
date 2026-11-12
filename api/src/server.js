import { createApp } from './app.js';
import { connectToDatabase, disconnectFromDatabase } from './config/database.js';
import { env } from './config/env.js';

async function startServer() {
  await connectToDatabase();

  const server = createApp().listen(env.port, () => {
    console.log(`API listening on port ${env.port}`);
  });

  // Render sends SIGTERM before replacing the service on every deploy.
  process.on('SIGTERM', () => {
    server.close(async () => {
      await disconnectFromDatabase();
      process.exit(0);
    });
  });
}

startServer().catch((error) => {
  console.error('Failed to start the API:', error.message);
  process.exit(1);
});
