import React from "react";
import "./App4.css"; //Нужно задать стили
import "./Messenger.css"
import Plashka from "./Plashka"
import ConversationList from "./ConversationList"
import {plashkaDATA} from "./Data"

export interface Istate{
  indexDialog: number;
  title: string;
}

class App extends React.PureComponent {
  state: Istate = {
      indexDialog: 0,
      title: "Здесь скоро будет чат",
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
         title={this.state.title}
         indexDialog={this.state.indexDialog}
          >
        </ConversationList>
        </div>
    </div> 
    );
  }
} 

export default App;