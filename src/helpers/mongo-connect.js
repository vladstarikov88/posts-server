import mongoose from 'mongoose';

function mongoConnect() {
  const url = process.env.MONGO_URL;
  const MongoClient = require('mongodb').MongoClient;
  const client = new MongoClient(url, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  client.connect(() => {
  });
}

export { mongoConnect };


