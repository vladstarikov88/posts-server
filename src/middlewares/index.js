import { Router } from 'express';
import { cors } from './cors';

const middlewares = new Router();

middlewares.use(cors)

export { middlewares }
