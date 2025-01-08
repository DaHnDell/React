import axios from 'axios';
import React, { useState } from 'react';
import { data, Navigate, useNavigate } from 'react-router-dom';

const Write = () => {
  // const [title, setTitle] = useState('');
  // const [content, setContent] = useState('');
  // const [memberEmail, setEmail] = useState('');

  const [board, setBoard] = useState({title:'', content:'', memberEmail:''});
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    // const etn = e.target.name
    // switch(etn){
    //   case 'title' :
    //     setTitle(e.target.value);
    //     console.log(title);
    //     break;
    //   case 'content' :
    //     setContent(e.target.value);
    //     console.log(content);
    //     break;
    //   case 'memberEmail' :
    //     setEmail(e.target.value);
    //     console.log(memberEmail);
    //     break;
    // }
    const {name, value} = e.target;
    setBoard({...board, [name] : value});
  }

  const handleSubmit = (e) => {
    // const returnObj = {title:title, content:content, memberEmail:memberEmail};
    e.preventDefault();
    console.log(board);

    (async () => {
      setLoading(true);
      try{
        const resp = await axios({
          method:'post',
          url:'http://localhost:8080/api/v1/board',
          data:board,
          headers: {
            'Content-Type' : 'application/json'
          }
        });
        setData(resp.data);
      }catch(err){
        console.log(err);
        setError(err);
      }finally{
        setLoading(false);
      }
    })();
    alert("posted Successfully!");
    console.log("=============================");
    console.log("posted");
    console.log("=============================");
    navigate("/");
  }

  return (
    <>
      <h1>write</h1>
      <form onSubmit={handleSubmit}>
        <p>input title</p>
        <input type="text" value={board.title} name='title' onChange={handleChange}/>
        <p>input content</p>
        <input type="text" value={board.content} name='content' onChange={handleChange}/>
        <p>input memberEmail</p>
        <input type="text" value={board.memberEmail} name='memberEmail' onChange={handleChange}/>
        <button onClick={handleSubmit}> post </button>
      </form>
    </>
  );
}

export default Write;
