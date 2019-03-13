import React, { Component } from 'react';
import styled from 'styled-components'

const Authorization = styled.div`
  display: flex;
  justify-content: center;
  background-color: #FFFFFF90;
  height: 275px;
  width: 300px;
  padding: 20px 0 40px 0;
  border-radius: 20px;
  text-align: center;
  h2 {
    font-weight: 500;
  }
  input, button  {
    border-radius: 10px;
    padding: 25px 20px;
    border: none;
    background: none;
    font-weight: 500;
  }
  button:hover, input:hover {
    background-color: #FFFFFF90;
  }
`

class Authorize extends Component {
  render() {
    return(
      <div id="container">
        <Authorization>
          <form>
            <h2>Sign In</h2>
            <input type="text" placeholder=" username"></input><br/>
            <input type="password" placeholder=" password"></input><br/>
            <button type="submit">submit</button>
          </form>
      </Authorization>
    </div>
    )
  }
}

export default Authorize;
