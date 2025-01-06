import React, { useEffect, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Post = () => {
  
  // ajax + axios 구문 
  const [post, setPost] = useState([]); // data
  const [loading, setLoading] = useState(true); // load
  const [error, setError] = useState(null); // error
  useEffect(()=>{
    const getList = async () => {
      try{
        const resp = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPost(resp.data);
      }catch(err){
        console.log(err);
        setError(err);
      }finally{
        setLoading(false);
      }
    }
    getList();
  }, []);

  if(loading){
    return (
      <>
        <Container className='text-center mt-5'> 
          <h1>POST IS ON LOAD</h1>
            <Spinner animation="border" role="status" variant='primary'>
              <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>
      </>
    )
  }

  if(error){
    return(
      <>
        <Container className='mt-5'>
          <Alert variant="danger">
            <Alert.Heading>error</Alert.Heading>
            <p>
              error occured :: {error.name}
            </p>
            <hr />
            <p className="mb-0">
              {error.message}
            </p>
          </Alert>
        </Container>
      </>

    )
  }

  return (
    <div>
      <Container>
        <h1>Post</h1>
        <ListGroup>
          {post.map(p => <ListGroup.Item key={p.id} action as={Link} to={`/posts/${p.id}`}>{p.title}</ListGroup.Item>)}
        </ListGroup>
      </Container>
    </div>
  );
}

export default Post;
