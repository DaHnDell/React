import React, { useEffect, useState } from 'react';
import useAxios from '../../hooks/useAxios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';
// import axios from 'axios';

const View = () =>  {
  const {loading, error, req} = useAxios();
  const param = useParams();
  const num = param.num;
  const navigate = useNavigate();
  const {email} = useAuth();
  const [note, setNote] = useState({});
  const [myLike, setMyLike] = useState({});

  useEffect(()=>{
    (async() => {
      setNote(await req('get', `notes/${num}`));
      const queryString = new URLSearchParams({email, num}).toString();
      setMyLike(await req('get', `likes?${queryString}`));
    })();
  },[num, req, email]); // 이펙트 관련 처리. param 자체에 의존할 경우 문제 발생.

  if(error){
    return <div><h1>Error Occured!</h1></div>;
  }
  if(loading){
    return <div><h1>Loading,,,</h1></div>;
  }
  

  const handleDelete = e => {
    e.preventDefault();
    console.log("expect del");
    if(!window.confirm("삭제 하시겠습니까?")){
      return;
    }
    req('delete', `notes/${num}`);
    navigate("/notes");
  }
  const handleLikesToglle = async e=> {
    e.preventDefault();
    const ret = await req('post', `likes`, {email, num});
    setMyLike(!myLike);
    setNote({...note, likesCnt:note.likesCnt + (ret.result ? -1: 1)});
  }


  return note && (
      <div>
        <h1>VIEW</h1>
        <p>num : {param.num}</p>
        <p>title : {note.title} </p>
        <p>content : {note.content} </p>
        <p>writer : {note.writerEmail} </p>
        <p>regDate : {note.regDate} </p>
        <p>modDate : {note.modDate}</p>
        <button onClick={handleLikesToglle}>Like <span>{myLike ? '♥' : '♡'}</span>{note.likesCnt}</button>
        <div>
          <h3>attaches : {note.attachDtos && note.attachDtos.length}</h3>
          <ul>
            {note.attachDtos && note.attachDtos.map(a=> <li key={a.uuid}><Link to={a.url}>{a.origin}</Link></li>)}
          </ul>
        </div>
        <Link to={`/notes/modify/${note.num}`}><button>modify note</button></Link>
        <br/>
        <button onClick={handleDelete}> delete note </button>
      </div>
  );
}

export default View;
