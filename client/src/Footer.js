import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  width: 100%;
  bottom: 100px;
  > * {
    padding: 20px;
    margin: 0;
  }
`

class Footer extends Component {
  componentDidMount() {
    axios.get('/api/say_something').then(response => {
      console.log(response.data);
    });
  }
  render() {
    return (
      <div>
        <StyledFooter>
          <p>made with ♡ by Dakotah Ducharme</p>
        </StyledFooter>
      </div>
    )
  }
}

export default Footer;
