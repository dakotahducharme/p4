import React, { Component } from 'react'
import styled from 'styled-components'
import Question from './Question'
import QuestionData, {
  START,
  ANXIETY,
  DEPRESSION,
  SOMETHING_ELSE,
  LONELY,
  MEDICATION,
  TOMORROW,
  STRETCH,
  ART,
  END,
  WALK,
} from './QuestionData'

class Help extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentQuestion: null,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.setState({currentQuestion: e.target.value});
  }

  renderCurrentQuestion = () => {
    const { currentQuestion } = this.state;
    switch (currentQuestion) {
      case ANXIETY:
        return (
          <Question 
            onClick={this.handleClick}
            options={[
              QuestionData[STRETCH],
              QuestionData[END]
            ]}
            {...QuestionData[ANXIETY]}
          />
        );
      case DEPRESSION:
        return (
          <Question 
            onClick={this.handleClick}
            options={[
              QuestionData[MEDICATION],
              QuestionData[WALK]
            ]}
            {...QuestionData[DEPRESSION]} 
          />
        );
      case LONELY:
        return (
          <Question 
            onClick={this.handleClick}
            options={[
              QuestionData[ART],
              QuestionData[END],
            ]}
            {...QuestionData[LONELY]} 
          />
        );
      case SOMETHING_ELSE:
        return (
          <Question 
            onClick={this.handleClick}
            options={[
              QuestionData[MEDICATION],
              QuestionData[WALK],
            ]}
            {...QuestionData[SOMETHING_ELSE]} 
          />
        );
      case MEDICATION:
        return (
          <Question 
            onClick={this.handleClick}
            options={[
              QuestionData[TOMORROW],
              QuestionData[ART],
            ]}
            {...QuestionData[MEDICATION]} 
          />
        );
      case TOMORROW:
        return (
          <Question 
            onClick={this.handleClick}
            options={[
              QuestionData[END],
              QuestionData[ART],
            ]}
            {...QuestionData[TOMORROW]} 
          />
        );
      case STRETCH:
        return (
          <Question 
            onClick={this.handleClick}
            options={[
              QuestionData[END],
              QuestionData[TOMORROW],
            ]}
            {...QuestionData[STRETCH]} 
          />
        );
      case ART:
        return (
          <Question 
            onClick={this.handleClick}
            options={[
              QuestionData[END],
              QuestionData[STRETCH],
            ]}
            {...QuestionData[ART]} 
          />
        );
      case WALK:
        return (
          <Question 
            onClick={this.handleClick}
            options={[
              QuestionData[END],
              QuestionData[ART],
            ]}
            {...QuestionData[ART]} 
          />
        );
      default:
        return (
          <Question 
            onClick={this.handleClick}
            options={[
              QuestionData[ANXIETY],
              QuestionData[DEPRESSION],
              QuestionData[LONELY],
              QuestionData[SOMETHING_ELSE],
            ]}
            {...QuestionData[START]}
           />
        );
    }
  }

  render() {
    return(
      <div class="container">
        {this.renderCurrentQuestion()}
      </div>

    )
  }
}

export default Help;
