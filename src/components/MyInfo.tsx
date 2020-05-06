
import React from 'react';
import Comment from "./Comment";
import {comment} from './Comment'
function MyInfo(){
    return(
      <div>
        <Comment
          data={comment.data}
          author={comment.author}/>
      </div>
    )
  }
  

export default MyInfo; 