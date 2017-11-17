# redox-code-challenge

This application fetches all pull requests (open & closed) from the lodash respository, and stores all of them in local server memory. It does not schedule updates to be pulled from the repo, so the stored PRs reflect what's current at the time of server startup.

This route will fetch all of the PRs - `http://jlim.site/fetchAllPullRequests`

Github has an endpoint to fetch PRs, but for a large list it is paginated and limited to 100 results per. The source code here just concats the queries until there is none left - https://github.com/jeongl/redox-code-challenge/blob/master/src/api/githubApi.js


The front end is fairly simple with a filter to show closed or open PRs.

### Stuff used to make this:

 * react
 * [recompose](https://github.com/acdlite/recompose) - HOC helpers for react.
 * lodash
 * express
 * [JSON-tree](https://github.com/alexkuz/react-json-tree) - To display the PR list in json format, with interactivity.
