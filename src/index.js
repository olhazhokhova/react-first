import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: "Hi, how are you?", likesCount: 12},
  {id: 2, message: "It's my first post!", likesCount: 10},
  {id: 3, message: "bla bla bla", likesCount: 100},
  {id: 4, message: "More messages", likesCount: 33}
];
let dialogs = [
  {id: 1, name: "Nika"},
  {id: 2, name: "Olya"},
  {id: 3, name: "Mariya"},
  {id: 4, name: "Vitaliy"},
  {id: 5, name: "Andrey"}
];
let messages = [
  {id: 1, message: "HI"},
  {id: 2, message: "How are you?"},
  {id: 3, message: "Great"}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
