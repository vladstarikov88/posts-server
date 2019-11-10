import 'module-alias/register';
import 'dotenv/config';
import { app } from './app';
import { mongoConnect } from './helpers/mongo-connect';
const port = process.env.PORT !== undefined ? process.env.PORT : '3000'; 


mongoConnect()
// .then(() => {
app.listen(port)
// })
