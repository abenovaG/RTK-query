import React from 'react';
import './App.css';
import {useState} from "react";
import { useGetTodosQuery} from "./redux/todosApi";

function App() {
    const [count, setCount] = useState('');
    const {data = [], isLoading} = useGetTodosQuery(count);

    if (isLoading) return <h1>Loading...</h1>

  return (
    <div className="App">
        <div>
            <select value={count} onChange={(event) => setCount(event.target.value)}>
                <option value="''">all</option>
                <option value="3">3</option>
                <option value="7">7</option>
                <option value="10">10</option>
            </select>
        </div>
      <ul>
          {data.map((item) =>  (
              <li key={item.id}>
                  {item.title}
              </li>
          )) }
      </ul>
    </div>
  );
}

export default App;
