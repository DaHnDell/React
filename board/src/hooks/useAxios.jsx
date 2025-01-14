import axios from 'axios';
import { useCallback, useState } from 'react';
import { useAuth } from './AuthContext';

const BASE_URL ='http://localhost:8080/api/v1/';

const useAxios = (baseUrl = BASE_URL) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {token} = useAuth();
  // const tmpToken = 'eyJhbGciOiJIUzM4NCJ9.eyJpYXQiOjE3MzY3NTQ1MTgsImV4cCI6MTczOTQzMjkxOCwic3ViIjoidXNlcjEwMUBrY2FubWluMTAxLmNvbSJ9.l59inoaw0ZNwG6LdPrB--SKzablpVAdCNpD5n3fNQ2MxaUquX1Ai-mlCjZTBjp1M';
  const tmpToken = token;
  const req = useCallback(
    async (method, endpoint, body=null, adddHeaders = {}) => {
      setLoading(true);
      setError(null);
      try{
        const resp = await axios({
          url: `${baseUrl}${endpoint}`,
          method,
          data: body,
          headers: {
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${tmpToken}`,
            ...adddHeaders
          }
        });
        setData(resp.data);
        return resp.data;
      }catch(err){
        setError(err);
      }finally{
        setLoading(false);
      }
    }
  , [baseUrl, token]);

  return {data, loading, error, req};

}

export default useAxios;
