import React, { useEffect } from 'react';
import useAxios from '../../hooks/useAxios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const View = () =>  {
  const {data, loading, error, req} = useAxios();
  const param = useParams();
  const num = param.num;
  const navigate = useNavigate();

  useEffect(()=>{
  (async() => {
    const resp = await req('get', `notes/${num}`);
    console.log(resp);
    })();
  },[req, num]); // 이펙트 관련 처리. param 자체에 의존할 경우 문제 발생.
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

  return (
    data && (
      <div>
        <h1>VIEW</h1>
        <p>num : {param.num}</p>
        <p>title : {data.title} </p>
        <p>content : {data.content} </p>
        <p>writer : {data.writerEmail} </p>
        <p>regDate : {data.regDate} </p>
        <p>modDate : {data.modDate}</p>
        <div>
          <h3>attaches : {data.attachDtos.length}</h3>
          <ul>
            {data.attachDtos.map(a=> <li key={a.uuid}><Link to={a.url}>{a.origin}</Link></li>)}
          </ul>
        </div>
        <Link to={`/notes/modify/${data.num}`}><button>modify note</button></Link>
        <br/>
        <button onClick={handleDelete}> delete note </button>
      </div>
    )
  )
}

export default View;
