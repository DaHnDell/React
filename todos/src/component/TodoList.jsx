import React, { useEffect, useState } from 'react';
import Todo from './Todo';

const TodoList = () => {

  const [todos, setTodos] = useState([]);
  const myUrl = "http://localhost:8080/api/todo/list";
    useEffect(() => {
      (async () => {
        const response = await fetch(myUrl);
        if(!response.ok){
          throw new Error('Network Error occured');
        }
        const data = await response.json();
        console.log(data);
        setTodos(data);
      })(); // 즉시실행함수
    }, []);
    return todos.length ? <ul>{todos.map(todo => <Todo key = {todo.id} {...todo}/>)}</ul> : <ul><li>페이지 로딩중</li></ul>;
}

export default TodoList;
