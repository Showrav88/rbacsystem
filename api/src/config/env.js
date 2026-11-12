import 'dotenv/config';

function readRequiredVariable(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const env = {
  port: Number(process.env.PORT) || 4000,
  mongodbUri: readRequiredVariable('MONGODB_URI'),
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
};
