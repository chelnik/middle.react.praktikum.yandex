import React, { Component } from "react";
import "./App4.css"; //Нужно задать стили
import "./Messenger.css"
 const plashkaDATA = [
    {
      date: (new Date()),
      text: 'Это просто текст первого комментария', 
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/63/64', 
      lastMessage: '',
  },
  {
    date: (new Date()),
    text: 'А это второго', 
    name: 'SECOND Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
    lastMessage: '',
},

]

    const tempMessages = [
      [
       {
         id: 1,
         author: 'apple',
         message: `Это чат с уникальным сгенерированным идентификатором: ${Math.round(Math.random()*100)}`,
         timestamp: new Date().getTime()
       },
       {
         id: 2,
         author: 'orange',
         message: 'It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!',
         timestamp: new Date().getTime()
       },

     ],
     [
      {
        id: 1,
        author: 'Получилось',
        message: `Это чат с уникальным сгенерированным идентификатором: ${Math.round(Math.random()*100)}`,
        timestamp: new Date().getTime()
      },
      {
        id: 2,
        author: 'Получилось дааааааааааааа!!!!!!!!',
        message: 'В атаку',
        timestamp: new Date().getTime()
      },

    ]
    ]
//Здесь будут отображаться сообщения

class ConversationList extends Component <Istate>{
  render() { 
    return(
      <div className="wrapperConversation">
        <div className="conversation-list" >
        <h1>{this.props.title}</h1>
        {this.props.children}
        {tempMessages[this.props.indexDialog].map((item,index) =>(
            
        
         <div key={index} className="conversation-list-item">
             <div className="conversation-info">
                  <h1 className="conversation-title">{item.author}</h1>
                   <p className="conversation-snippet">{item.message}</p>
                   {/* <p className="conversation-snippet">{item.timestamp + item.id}</p> */}
                   <h3>{new Date ().toLocaleTimeString("en-US")}</h3>
             </div>
          </div>
             
        ) )}
    </div>
      </div>
    ) 
  } 
}

interface Iprops{
  key: number;
  name: string;
  text: string;
  photo: string;
  date: Date;
  onClickBlock: any;
}
function Plashka(props: Iprops){
 return(
    <div className="wrapperPlashka">
    <div className="conversation-list-item" onClick={props.onClickBlock}>
        <img className="conversation-photo" src={props.photo} alt="conversation" />
        <div className="conversation-info">
          <h1 className="conversation-title">{props.name}</h1>
          <p className="conversation-snippet">{props.text}</p>
        </div>
      </div>
    </div>
 )
}

interface Istate{
  indexDialog: number;
  title: string;
}
// написал any потому что выдавало без него ошибку которую не смог исправить
// как только моя работа будет проверена вами, я уберу из компонента APP тип ANY
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