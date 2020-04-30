
import React from 'react';
import { render } from '../../node_modules/@types/testing-library__react';
import { super } from '../../node_modules/@babel/types';

class Gak extends React.Component{
  constructor(props){
    super(props)
    this.state = {username: 'Ravil Kazumov'}
  }
  render{
    const {username} = this.state
    return(
      <div>
        {username}
      </div>
    );
  }
}

function MyInfo(){
    return(
      <div>
        <h1>Vadim Chelnik</h1>
        <p>this is my story</p>
        <ul>
          <li>i was born in yeisk</li>
          <li>five years old i leave my home</li>
          <li>and today i programming my own web-site</li>
          <li>Hi, bro. Ты лучший.</li>
          <li><Gak/></li>
        </ul>
      </div>
    )
  }
  

export default MyInfo;