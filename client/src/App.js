import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Authorize from './Authorize.js';
import styled from 'styled-components'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
  width: 100vw;
  min-height: 100vh;
`

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <Authorize class="signin"/>
        <Footer />
      </AppContainer>
    );
  }
}

export default App;
