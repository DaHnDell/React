import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { useAuth } from '../../hooks/AuthContext';

const Write = () => {
  const {req} = useAxios();
  const param = useParams();
  const num = param.num;
  const navigate = useNavigate();
  const {email} = useAuth();
  const [board, setBoard] = useState({title:'', content:'', writerEmail:email, attachDtos:[]});
  const [uploaded, setUploaded] = useState([]);

  useEffect(() => {
    (async() => {
      const resp = await req('get', `notes/${num}`);
      console.log(resp)
      setBoard(resp);
      setUploaded(resp.attachDtos);
    })();
  }, [req, num]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setBoard({...board, [name] : value});
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      console.log("Submitting data:", { ...board, attachDtos: uploaded });
      await req('put', `notes/${num}`, { ...board, attachDtos: uploaded });
      alert("Altered Successfully!");
      // navigate("/notes");
    } catch (error) {
      console.error("Error during submission:", error);
      alert("Failed to update the note. Check the console for errors.");
    }
  };
  

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

  return (
    <>
      <h1>Modify</h1>
      <form onSubmit={handleSubmit}>
        <p>input title</p>
        <input value={board.title} name='title' onChange={handleChange}/>
        <p>input content</p>
        <input value={board.content} name='content' onChange={handleChange}/>
        <p>input memberEmail</p>
        <input value={board.writerEmail} name='writerEmail' onChange={handleChange}/>
        <h3>attaches : {board.attachDtos.length}</h3>
        <ul>
          {board.attachDtos.map(a=> <li key={a.uuid}><Link to={a.url}>{a.origin}</Link></li>)}
        </ul>
        <button onClick={handleSubmit}> alter </button>
        <hr/>
        <ul>
        <input type='file' onChange={handleFileUpload} name='file' multiple />
          {uploaded.map
          (u => <li key={u.uuid}><Link to={u.url}>{u.origin}</Link> <button data-uuid={u.uuid} onClick={(e=> setUploaded(uploaded.filter(file => file.uuid !== e.currentTarget.dataset.uuid)))}> delete</button></li>)
          }
        </ul>
      </form>
    </>
  );
}

export default Write;
