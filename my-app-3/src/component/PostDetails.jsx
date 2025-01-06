import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import axios from 'axios';
import Card from 'react-bootstrap/Card';

const PostDetails = () => {
  const {id} = useParams();
  // ajax + axios 구문 
  const [postDetail, setPostDetail] = useState(null); // data
  const [loading, setLoading] = useState(true); // load
  const [error, setError] = useState(null); // error
  useEffect(()=>{
    const get = async () => {
      try{
        const resp = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        console.log(resp.data);
        setPostDetail(resp.data);
        console.log(postDetail)
      }catch(err){
        console.log(err);
        setError(err);
      }finally{
        setLoading(false);
      }
    }
    get();
  }, [id]); // id가 바뀔 때마다 리렌더링을 해야 함

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
    <>
      <Container>
        <h1>PostDetail</h1>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>{postDetail.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{postDetail.userId}</Card.Subtitle>
            <hr/>
            <Card.Text>
             {postDetail.body}
            </Card.Text>
          </Card.Body>
          <Button as={Link} to="/">TO LIST</Button>
        </Card>
      </Container>
    </>
  );

}

export default PostDetails;
