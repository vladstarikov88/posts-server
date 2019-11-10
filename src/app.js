import express from 'express';
import { middlewares } from './middlewares';
import { router } from './routes';

const app = express();

app.use(middlewares);
app.use(router)

export { app };
