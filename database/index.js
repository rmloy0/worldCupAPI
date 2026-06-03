const env = require('dotenv').config();

const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

let _db;

const initDB = async (callback) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log(' MongoDB (Mongoose) Connected');

    callback();
  } catch (err) {
    callback(err);
  }
};

module.exports = {
  initDB,
  // getDb,
};
