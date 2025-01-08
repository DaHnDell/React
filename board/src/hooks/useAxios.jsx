import React, { useCallback } from 'react';

const BASE_URL ='http://localhost:8080/api/v1/';

const useAxios = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const req = useCallback(
    async (method, endpoint, body=null, adddHeaders = {}) => {
      setLoading(true);
      setError(null);
      try{
        const resp = await axios({
          method,
          url: `${BASE_URL}${endpoint}`,
          data:body,
          headers: {
            'Content-Type' : 'application/json',
            ...adddHeaders
          }
        });
        setData(resp.data);
      }catch(err){
        setError(err);
      }finally{
        setLoading(false);
      }
    }
  , []);

  return {data, loading, error, req};

}

export default useAxios;
