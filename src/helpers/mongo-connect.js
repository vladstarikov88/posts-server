import mongoose from 'mongoose';

function mongoConnect() {
  mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  mongoose.connection.on('error', (error) => {
    console.error(error)
  })
  mongoose.connection.on('connected', () => {
    console.log('connected')
  })
}

export { mongoConnect };


