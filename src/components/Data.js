import React, { Component } from "react";
export const plashkaDATA = [
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

export    const tempMessages = [
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
        message: 'В атакууууу',
        timestamp: new Date().getTime()
      },

    ]
    ]