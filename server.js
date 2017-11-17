require('dotenv').config();

const express = require('express');
const helmet = require('helmet')
const app = express();
const bunyan = require('bunyan');
const compression = require('compression');
const { init, getResultSet } = require('./src/api/githubApi');

app.use(helmet());
app.use(compression());

init().catch((error) => {
  bunyan.createLogger({ name: 'PRfetcher' }).info(error);
});

app.get('/fetchAllPullRequests', (req, res) => res.json(getResultSet()));

app.listen(3037, () => console.log('Redox app listening on port 3037!'))