import React from "react"

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
export default Plashka