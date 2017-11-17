import React from 'react';
import ReactDOM from 'react-dom';
import ShowPullRequests from './components/ShowPullRequests';

const Main = () => (
  <div id="main">
    <p>PR info for Lodash</p>
    <ShowPullRequests />
  </div>
)

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
