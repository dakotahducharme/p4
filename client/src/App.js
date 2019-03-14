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
  state = {
    currentPage: 'Help',
    currentUser: null
  };

  navigate = (page) => {
    this.setState({currentPage: page});
  };

  setUser = (user) =>  {
    this.setState({currentUser: user});
  }

  renderContent = () => {
    const { currentPage } = this.state;
    switch (currentPage) {
      case 'login':
        return (
          <Authorize navigate={this.navigate} login={true} setUser={this.setUser} />
        );
      case 'signup':
        return (
          <Authorize navigate={this.navigate} signup={true} setUser={this.setUser} />
        );
      default:
        return(
          <Help />
        );
    }
  }

  render() {
    return (
      <AppContainer>
        <Header navigate={this.navigate} currentUser={this.state.currentUser} />
        {this.renderContent()}
        <Footer />
      </AppContainer>
    );
  }
}

export default App;
