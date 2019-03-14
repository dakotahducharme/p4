import React, { Component } from 'react';
import styled from 'styled-components';

const Question  = ({ id, title, body, onClick, options }) => {
  return(
    <div class="answers" id={id}>
      {title && <h2>{title}</h2>}
      {body && <h3>{body}</h3>}
      <ul>
      {options.map(option => (
        <li key={option.id}><button onClick={onClick} value={option.id}>{option.prompt}</button></li>
      ))}
      </ul>
    </div>
  )
}

export default Question;