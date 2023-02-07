import logo from './logo.svg';
import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {

  let [todo, setTodo] = useState([])
  const [text, setText] = useState("")

  function add() {
    todo.push(text)
    setTodo([...todo])
    setText("")
    console.log(todo)
  }
  function all(){
    setTodo([])
  }
  return (
    <div className="App">
      <header className="App-header">
        <input
        value={text}
        onChange={e => {
          setText(e.target.value)
        }}
        placeholder='enter text'>
        </input>
        <ol>
          {todo.map((val, ind) => {
            function del(){
              setTodo(todo.filter(e => e !== val ))
            }
            return (
              <li key={ind}>{val} <button onClick={del} >delete</button></li>
            )
})}
        </ol>
        <button onClick={add}>add</button>
        <button onClick={all}>delete All</button>
      </header>
    </div>
  );
}

export default App;


