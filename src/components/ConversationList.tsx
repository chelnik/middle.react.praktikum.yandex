import React, {Component} from "react"
import {tempMessages} from "./Data"

export interface Istate{
    indexDialog: number;
  }

class ConversationList extends Component <Istate>{
    render() { 
      return(
        <div className="wrapperConversation">
          <div className="conversation-list" >
          {tempMessages[this.props.indexDialog].map((item,index) =>(
           <div key={index} className="conversation-list-item">
               <div className="conversation-info">
                    <h1 className="conversation-title">{item.author}</h1>
                     <p className="conversation-snippet">{item.message}</p>
                     <h3>{item.timestamp}</h3>
               </div>
            </div>
               
          ) )}
      </div>
        </div>
      ) 
    } 
  }
export default ConversationList
