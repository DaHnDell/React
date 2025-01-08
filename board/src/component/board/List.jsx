import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';

const List = () => {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();
  //effect>>api 호출
  useEffect(() => {
    (async ()=> {
      setLoading(true);
        try{
          const resp = await axios({
            url :  'http://localhost:8080/api/v1/board/list',
            method : 'get'
          });
          setBoards(resp.data.dtoList);
          setError(null);
        }catch(err){
          setError(err);
        }finally{
          setLoading(false);
        }
      })();
        return () => {
          
        };
      },[]);
  if(error){
    return <div><h1>Error Occured!</h1></div>;
  }
  if(loading){
    return <div><h1>Loading,,,</h1></div>;
  }

  return (
    // state, effect
    <div>
      <button onClick={()=>navigate('/write')}>Write Post</button>
      <ul>
        {boards.map(b => <li key={b.bno}>{b.title}</li>)}
      </ul>
    </div>
  );
}

export default List;
