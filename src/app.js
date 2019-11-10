import express from 'express';
import { middlewares } from './middlewares';
import { router } from './routes';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
})); 
app.use(middlewares);
app.use(router)

export { app };
