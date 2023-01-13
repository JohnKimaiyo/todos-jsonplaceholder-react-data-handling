import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FetchData() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log(res);
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ul>
        {todos.map((todos) => (
          <li key={todos.id}>{todos.title}</li>
        ))}
      </ul>
    </div>
  );
}
