const { connect, connection } = require('mongoose');

// below is looking for the environment variable if deployed to heroku; otherwise, it will run this application locally
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentsDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
