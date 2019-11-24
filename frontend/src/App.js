import React,{useState} from 'react';
import axios from 'axios'
import './App.css';

function App() {

  const [todoList, settodoList] = useState([])
  axios.get("/api/todos/").then(res=> settodoList(res.data) )

  

  return (
    <div className="App">
        {todoList.map(item =>(
          <p>
            {item.description}
          </p>

        ))}
    </div>
  );
}

export default App;
