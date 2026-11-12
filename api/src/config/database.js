import mongoose from 'mongoose';
import { env } from './env.js';

export async function connectToDatabase() {
  await mongoose.connect(env.mongodbUri);
  console.log(`Connected to MongoDB database "${mongoose.connection.name}"`);
}

export async function disconnectFromDatabase() {
  await mongoose.disconnect();
}

export function isDatabaseConnected() {
  return mongoose.connection.readyState === mongoose.ConnectionStates.connected;
}
