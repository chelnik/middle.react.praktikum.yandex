// import React, { Component } from "react";
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
         author: 'JORJE',
         message: `Тут мне пришлось попотетьи придумать цифру: ${Math.round(Math.random()*100)}`,
         timestamp: new Date('Apr 22, 2020 07:22:13').toLocaleString()
         

       },
       {
         id: 2,
         author: 'BEATLES',
         message: 'Я так горжусь тобой',
         timestamp: new Date('Apr 23, 2020 08:22:13').toLocaleString()
       },

     ],
     [
      {
        id: 1,
        author: 'OSTAP',
        message: `Представляешь я написал сообщение с уникальной цифрой: ${Math.round(Math.random()*100)}`,
        timestamp: new Date('Apr 18, 2020 07:22:13').toLocaleString()
      },
      {
        id: 2,
        author: 'vLADILEN',
        message: 'Привет как дела это сообщение последнее, когда напишешь?',
        timestamp: new Date('May 4, 2020 19:22:13').toLocaleString()
      },

    ]
    ]