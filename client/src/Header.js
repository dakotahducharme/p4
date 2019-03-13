import React, { Component } from 'react';
import styled from 'styled-components'
import Dropdown from './dropdownmenu/Dropdown';

const Heading = styled.header`
  width: 100%;
  padding-top: 20px;
  ul, li, h1 {
    display: inline;
  }
  li {
    padding: 0 20px;
  }
  h1 {
    padding-right: 100px;
    font-weight: 400;
    font-size: 40px;
  }
  a {
    text-decoration: none;
    color: black;
  }
  a:hover {
    color: grey;
  }
  Dropdown:hover {
    color: #e5e5e550;
  }
`

const Header = () => {
  return (
    <Heading>
      <nav>
        <ul>
          <h1>bloom</h1>
          <li><a href="#">home</a></li>
          <li><a href="#">github</a></li>
          <Dropdown />
        </ul>
      </nav>
    </Heading>
  );
}

export default Header;
