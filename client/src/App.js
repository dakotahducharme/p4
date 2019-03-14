import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Authorize from './Authorize.js';
import Help from './Help.js';
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
    this.state = {
      value: '',
    }
    return (
      <AppContainer>
        <Header />
        // signedin ? help  :  signin
        <Help onClick={this.state.value}/>
        <Footer />
      </AppContainer>
    );
  }
}

export default App;
