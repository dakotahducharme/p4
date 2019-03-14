import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'

const Authorization = styled.div`
  display: flex;
  justify-content: center;
  background-color: #FFFFFF99;
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
  state = {
    username: '',
    password: ''
  }
  submit = (e) => {
    e.preventDefault();
    const { login, signup, setUser, navigate } = this.props;
    const { username, password } = this.state;
    if (login) {
      axios.post('/api/login', {
        user: {username, password},
      }).then(res => {
        setUser(res.data);
        navigate('help');
      }).catch(err => console.log(err))
    } else if (signup) {
      axios.post('/api/users', {
        user: {username, password},
      }).then(res => {
        setUser(res.data);
        navigate('help');
      }).catch(err => console.log(err))
    }
  }

  render() {
    const { login, signup } = this.props;
    const { username, password } = this.state;
    return(
      <div class="container">
        <Authorization>
          <form onSubmit={this.submit}>
            <h2>{login ?  "Sign In" : "Sign Up"}</h2>
            <input type="text" placeholder=" username" value={username} onChange={ (e) => this.setState({username: e.target.value})}></input><br/>
            <input type="password" placeholder=" password" value={password} onChange={ (e) => this.setState({password: e.target.value})}></input><br/>
            <button type="submit">submit</button>
          </form>
      </Authorization>
    </div>
    )
  }
}

export default Authorize;
