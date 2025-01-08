import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';

const List = () => {
  const {data, loading, error, req} = useAxios();

  // const [boards, setBoards] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  
  const navigate = useNavigate();
  //effect>>api 호출
  useEffect(() => {
    req('get', 'board/list');
  },[req]);
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
        {data.dtoList.map(b => <li key={b.bno}>{b.title}</li>)}
      </ul>
    </div>
  );
}

export default List;
