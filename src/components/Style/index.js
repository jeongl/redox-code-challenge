/* eslint-disable import/prefer-default-export */
/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';

export const NavBarCss = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: blue;

  li {
    float: left;
    &:first-child {
      border-bottom: ${({ selected }) => (selected === 'Closed') ? '2px solid red' : ''}
    }
    &:nth-child(2) {
      border-bottom: ${({ selected }) => (selected === 'Open') ? '2px solid red' : ''}
    }
  }

  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  /* Change the link color to #111 (black) on hover */
  li a:hover {
    background-color: #111;
  }
`;

export const JSONtheme = {
  scheme: 'monokai',
  author: 'wimer hazenberg (http://www.monokai.nl)',
  base00: '#272822',
  base01: '#383830',
  base02: '#49483e',
  base03: '#75715e',
  base04: '#a59f85',
  base05: '#f8f8f2',
  base06: '#f5f4f1',
  base07: '#f9f8f5',
  base08: '#f92672',
  base09: '#fd971f',
  base0A: '#f4bf75',
  base0B: '#a6e22e',
  base0C: '#a1efe4',
  base0D: '#66d9ef',
  base0E: '#ae81ff',
  base0F: '#cc6633'
};
