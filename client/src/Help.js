import React, { Component } from 'react'
import styled from 'styled-components'

class Help extends Component {
  constructor(props){
    super(props);
    this.state = {
      show: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.setState({show: e.target.value});
  }

  render() {
    return(
      <div class="container">
        <div id="base">
          <h2>What's on your mind right now?</h2>
          <ul>
            <li><button onClick={ this.handleClick } value="anxiety">feeling anxious or stressed</button></li>
            <li><button value="depression">feeling depressed</button></li>
            <li><button value="lonely">just need a friend</button></li>
            <li><button value="somethingElse">something else</button></li>
          </ul>
        </div>

        <div class="answers" id="depressed" >
          <h2>Did something happen today that made you feel down?</h2>
          <ul>
            <li><button>yes</button></li>
            <li><button> no</button></li>
            <li><button>kind of</button></li>
          </ul>
        </div>

        <div class="answers" id="medication" >
          <h2>Did you take your medication today (if you're on any)?</h2>
          <ul>
            <li><button>yes, but I still feel down</button></li>
            <li><button> no, I'm not on medication</button></li>
            <li><button>no, but I'm on medication</button></li>
          </ul>
        </div>

        <div class="answers" id="yes-medication" >
          <h2>Hey, that's totally okay. Getting better can be really rough, and there's bad days sometimes, but you're trying your best, and that's what's important. Tomorrow is another day, and you can wake up and take it tomorrow</h2>
          <ul>
            <li><button>what can we do tomorrow?</button></li>
            <li><button>I need a distraction</button></li>
            <li><button>something happened</button></li>
          </ul>
        </div>

        <div class="answers" id="grounding" >
          <h2>Let's focus on how we can feel better right now. What is around us? Are we safe? Are we comfortable? Survey your surroundings.</h2>
          <h2>We're going to do a grounding excercise, but only if you want to. Take a look around.</h2>
          <h3>Count five things you can see.</h3>
          <h3>Count four things you can touch.</h3>
          <h3>Count three things you can hear.</h3>
          <h3>Count two things you can smell.</h3>
          <h3>Count one thing that you can taste.</h3>
          <ul>
            <li><button>this worked!</button></li>
            <li><button>let's do something else</button></li>
          </ul>
        </div>

        <div class="answers" id="tomorrows-goals" >
          <h2>The future can be a scary thought, but it doesn't have to be. Sometimes planning out your day or week can make you feel better and more organized. You can take control of what YOU want to do, even if that just means wearing your favorite tshirt or going on a walk with your dog</h2>
          <h3> Write down (in a planner, on a piece of scrap paper, or just on your phone) five or more things you want to do tomorrow. Do not just write down things you 'have' to do. Set small, reasonable goals. Set aside time for yourself to relax. </h3>
          <ul>
            <li><button>this worked!</button></li>
            <li><button>let's do something else</button></li>
          </ul>
        </div>

        <div class="answers" id="stretch" >
          <h2>Some days, it can be hard to get out of bed, or even want to wake up.</h2>
          <h3>Maybe you stayed in bed today, and that's okay! But if you can, you should get up and stretch your arms, legs, and back. Release all of your physical stress. If you can't get up and stretch, take 5 deep breaths (in through your nose and out through your mouth)</h3>
          <ul>
            <li><button>this worked!</button></li>
            <li><button>let's do something else</button></li>
          </ul>
        </div>

        <div class="answers" id="" >
          <h2></h2>
          <h3>blah</h3>
          <ul>
            <li><button>this worked!</button></li>
            <li><button>let's do something else</button></li>
          </ul>
        </div>

      </div>

    )
  }
}

export default Help;
