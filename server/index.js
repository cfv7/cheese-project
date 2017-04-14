const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

mongoose.Promise = global.Promise;

const {DATABASE_URL} = require('./config');

const {Cheese} = require('./models');

const app = express();

// API endpoints go here!
app.get('/api/cheeses', (req, res) => {
  Cheese
    .find()
    .exec()
    .then(cheeses => {
      res.json(cheeses.map(cheese => cheese.apiRepr()))
      //return res.status(200).json(cheeses);
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({error: 'Internal server error'});
    });
})

// Serve the built client
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Unhandled requests which aren't for the API should serve index.html so
// client-side routing using browserHistory can function
app.get(/^(?!\/api(\/|$))/, (req, res) => {
  const index = path.resolve(__dirname, '../client/build', 'index.html');
  res.sendFile(index);
});

const PORT = process.env.PORT || 3001;
let server;
function runServer(port=PORT, databaseUrl=DATABASE_URL) {
  console.log(databaseUrl);
  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    })
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  })
}

if (require.main === module) {
  runServer();
}

module.exports = {
  app, runServer, closeServer
};
