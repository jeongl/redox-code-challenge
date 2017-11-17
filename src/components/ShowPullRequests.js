/* eslint-disable no-undef */ // This is for the window.fetch api.
import React from 'react';
import JSONTree from 'react-json-tree';
import { flattenDeep, get } from 'lodash';
import {
  compose, withState, lifecycle, withHandlers, mapProps
} from 'recompose';
import NavBar from './NavBar';
import { JSONtheme } from './Style';

const enhance = compose(
  withState('selectedFilter', 'changeSelectedFilter', 'Closed'),
  withHandlers({
    updateFilter: ({ changeSelectedFilter }) => choice => changeSelectedFilter(choice)
  }),
  lifecycle({
    componentDidMount() {
      fetch('http://localhost:3000/fetchAllPullRequests')
        .then(resp => resp.json())
        .then((resp) => {
          this.setState({ apiData: flattenDeep(resp) });
        });
    }
  }),
  mapProps(props => ({
    ...props,
    apiData: props.apiData &&
      props.apiData.filter(item => item.state === props.selectedFilter.toLowerCase())
  }))
);

const ShowPullRequests = enhance(({
  apiData, selectedFilter, updateFilter
}) => (
  <div id="show-prs">
    <NavBar selected={selectedFilter} updateFilter={updateFilter} />
    {apiData &&
      <JSONTree data={apiData} theme={JSONtheme} invertTheme={true} />
    }
  </div>
));

export default ShowPullRequests;
