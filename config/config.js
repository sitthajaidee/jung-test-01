// Sample configuration file
const config = {
  PORT: process.env.PORT || 3000,
  DB_URI: process.env.DB_URI || 'mongodb://localhost:27017/mydatabase',
  API_KEY: process.env.API_KEY || 'your-api-key'
};

module.exports = config;

