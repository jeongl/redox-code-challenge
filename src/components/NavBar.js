/* eslint-disable */
import React from 'react';
import { NavBarCss } from './Style';

export default function NavBar({ selected, updateFilter }) {
  return (
    <NavBarCss selected={selected}>
      <li onClick={() => updateFilter('Closed')}><a href="#/">Closed</a></li>
      <li onClick={() => updateFilter('Open')}><a href="#/">Open</a></li>
    </NavBarCss>
  );
}
