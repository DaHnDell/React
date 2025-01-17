import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { useAuth } from '../../hooks/AuthContext';

const Write = () => {
  const navigate = useNavigate();
  const {email} = useAuth();
  const [board, setBoard] = useState({title:'', content:'', writerEmail:email, attachDtos:[]});
  const [uploaded, setUploaded] = useState([]);
  const {req} = useAxios();

  useEffect(() => {
    setBoard(prev => ({...prev, writerEmail:email}));
  }, [email]);

  const handleFileUpload = async e => {
    const files = e.target.files;
    if (!files) return;
    
    const formData = new FormData();
    for(let i = 0; i < files.length; i++){
      formData.append("file", files[i]); // 유사배열 -> 배열로 바꿔줘야 함. // 앞에 이름이 requestbody
    }

    try {
      const result = await req('post', 'file/upload', formData, {'Content-Type' : 'multipart/form-data'})
      console.log(result);
      setUploaded([...uploaded, ...result]);
    } catch (error) {
      console.error("Error during upload:", error);
    }
    e.target.value = '';
  };


  const handleChange = (e) => {
    const {name, value} = e.target;
    setBoard({...board, [name] : value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(board);
    req('post', 'notes', {...board, attachDtos : uploaded});
    alert("posted Successfully!");
    navigate("/notes");
  }

        
  // const inputFile = <input type='file' onChange={handleFileUpload} name='file' multiple />;

  return (
    <div>
      <h1>write</h1>
      <form onSubmit={handleSubmit}>
        <p>input title</p>
        <input type="text" value={board.title} name='title' onChange={handleChange}/>
        <p>input content</p>
        <input type="text" value={board.content} name='content' onChange={handleChange}/>
        <p>input memberEmail</p>
        <input type="text" value={board.writerEmail} name='writerEmail' onChange={handleChange}/>
        <br/>
        {/* {inputFile} */}
        <input type='file' onChange={handleFileUpload} name='file' multiple />
        <button onClick={handleSubmit} > post </button>
      </form>
      <ul>
        {uploaded.map
        (u => <li key={u.uuid}><Link to={u.url}>{u.origin}</Link> <button data-uuid={u.uuid} onClick={(e=> setUploaded(uploaded.filter(file => file.uuid !== e.currentTarget.dataset.uuid)))}> delete</button></li>)
        }
      </ul>
    </div>
  );
}

export default Write;
