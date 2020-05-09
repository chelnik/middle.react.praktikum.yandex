import React from "react";
import "./App4.css";
import "./Messenger.css"
import Plashka from "./Plashka"
import ConversationList from "./ConversationList"
import {plashkaDATA} from "./Data"

export interface Istate{
  indexDialog: number;
}

class App extends React.PureComponent {
  state: Istate = {
      indexDialog: 0,
    }
  onClickBlock(index:number){
      this.setState({indexDialog: index})
    }
    
  render() {
    
    return (
      <div className="App"> 
      <div className="scrollable sidebar">
      
        {plashkaDATA.map((item, index) => (
          <Plashka
            index={index}
            key={index}
            name={item.name} 
            text={item.text}
            photo={item.avatarUrl}
            date={item.date}
            onClickBlock={() => this.onClickBlock(index)}
            />
        ))}  
    </div>

        <div className="scrollable content">
        <ConversationList
         indexDialog={this.state.indexDialog}
          >
        </ConversationList>
        </div>
    </div> 
    );
  }
} 

export default App;