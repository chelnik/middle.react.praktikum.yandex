import React from "react"
import {tempMessages} from "./Data"

interface Iprops{
    index: number;
    key: number;
    name: string;
    text: string;
    photo: string;
    date: Date;
    onClickBlock: ()=> void;
}

function Plashka(props: Iprops){
  let Arr = tempMessages[props.index]
  let lastMesage = Arr[Arr.length-1].message
  let timestamp = Arr[Arr.length-1].timestamp
    return(
       <div className="wrapperPlashka">
       <div className="conversation-list-item" onClick={props.onClickBlock}>
           <img className="conversation-photo" src={props.photo} alt="conversation" />
           <div className="conversation-info">
             <h1 className="conversation-title">{props.name}</h1>
             <p className="conversation-snippet">{lastMesage}</p>
             <p className="conversation-snippet">{timestamp}</p>
           </div>
         </div>
       </div>
    )
   }
export default Plashka
