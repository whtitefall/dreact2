import React,{useState} from 'react';
import axios from 'axios'
import './App.css';
import ReactMarkdown from 'react-markdown'
function App() {

  const [todoList, settodoList] = useState([])
  axios.get("/api/todos/").then(res=> settodoList(res.data) )



  return (
    <div className="App">
        {todoList.map(item =>(
          <p>
            {<ReactMarkdown source={item.description} />}
          </p>

        ))}
    </div>
  );
}

export default App;
