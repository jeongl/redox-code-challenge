/* eslint-disable no-plusplus */
/* eslint-disable function-paren-newline */
/* eslint-disable no-param-reassign */
const axios = require('axios');
const _ = require('lodash');
const bunyan = require('bunyan');
const log = bunyan.createLogger({ name: 'FETCH_ALL_PRS' });

const resultSet = [];

const fetchPage = page => axios({
  method: 'get',
  url: `https://api.github.com/repos/lodash/lodash/pulls?state=all&page=${page}&per_page=100`,
  auth: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD
  }
});

const fetchAllPRs = (page = 1) => {
  return new Promise((resolve, reject) => {
    fetchPage(page).then(({ data }) => {
      // This would be the stop condition to stop trying to request new pages of PR data.
      // If the result set is within this range, that means the next page should have none.
      if (data.length > 0 && data.length <= 100) {
        log.info('fetching data: ');
        resultSet.push(
          data.map(item => _.pick(item, [
            'url', 'html_url', 'number', 'state',
            'title', 'user', 'created_at', 'body'
          ]))
        );
        resolve(fetchAllPRs(++page));
      } else {
        log.info('done fetching all PRs!: ');
        resolve(_.flattenDeep(resultSet));
      }
    }).catch((error) => {
      reject(error);
    });
  });
};

module.exports = {
  init: fetchAllPRs,
  getResultSet: () => resultSet
};
