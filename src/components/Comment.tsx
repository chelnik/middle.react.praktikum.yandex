import { Comment } from './Comment.1';

import React from 'react';
import { render } from '@testing-library/react';
import { super } from '@babel/types';

function formatDate(date) {
    return date.toLocaleDateString();
  }
  
  function Avatar(props) {
    return (
      <img
        className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
    );
  }
  
   function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">{props.user.name}</div>
      </div>
    );
  }
  //Комнонет который находится ниже не функционирует та как нужно//
  // Зато теперь он работает правильно благодаря <> </> это React.Fragment//
   function CommentData (props){
    return (
      <>
      <div className="Comment-text">              {props.data.text}
      </div>
      <div className="Comment-date">
        {props.data.date}
      </div>
      </>
        
    );
  }

  function Comment(props) {
    return (<div className="Comment">
      <UserInfo user={props.author} />
      <CommentData data={props.data} />
    </div>);
  }
  
  export const comment = { //КАК ПЕРЕДАТЬ ВОТ ЭТОТ объект В КОМПОНЕНТ БЕЗ ФУНКЦПП РЕНДЕР?
    data: { 
      date: formatDate(new Date()),
      text: 'text of comment good text', 
    },
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };
  // export comment;
  // ЗДЕСЬ РЕАКТ DOM А ОН ДОЛЖЕН БЫТЬ В файле index.tsx
  // НО БЕЗ  РЕАКТ DOM НАШ КОМПОНЕНТ РАБОТАТЬ НЕ БУДЕТ
//  ReactDOM.render(
//    <Comment 
//      data={comment.data}
//      author={comment.author}
//    />,
//    document.getElementById('root')
//  );
  
  export default Comment;
  