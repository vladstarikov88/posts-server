import express from 'express';

import { posts } from '@/assets/mock';
import { middlewares } from './middlewares';

const app = express();
app.use(middlewares);


app.get('/', (request, response) => {
  response.send('Home page');
})

app.get('/posts', (request, response) => {
  response.send(posts);
})


export { app };
