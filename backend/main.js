const mongoose = require('mongoose')

// importing the environment variable
require('dotenv').config({path:'variables.env'})

// connect to Database and handle any bad connections
// mongoose.connect(process.env.MONGODB_URI)
// mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});
mongoose.Promise = global.Promise;

// CONNECTION ERROR HANDLING
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err.message}`);
});

// CONNECTION Success
mongoose.connection.once('open', () => {
  console.log('Successfully connected to MongoDB');
});

process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('MongoDB connection closed due to app termination');
  process.exit(0);
});
// Tell Mongoose to use ES6 promises
// mongoose.connection.on('error', (err)=>{
//   console.error(`${err.message}`)
// })

// starting the app on port 5555
const app = require("./app")

app.set('port', process.env.PORT || 5555)
const server = app.listen(app.get ('port'), () =>{
  console.log(`Server running on PORT ${server.address().port}`)
})
