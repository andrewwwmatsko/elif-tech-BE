import { initMobgoConnection } from './db/initMongoDB.js';
import { startServer } from './server.js';

const bootstrap = async () => {
  await initMobgoConnection();
  startServer();
};
bootstrap();
