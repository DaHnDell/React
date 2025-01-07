import React, { act, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {Container, Nav, Navbar} from 'react-bootstrap';

const Header = () => {
  // const [activeKey, setActiveKey] = useState('link-0');
  const location = useLocation();
  console.log(location);
  return (
    <>
      {/* Router의 Link 컴포넌트는 직접접 페이지 이동을 담당한다 */}
      {/* path relative : ../ ./ / 상대 경로 지정 가능 */}
      <Navbar expand="lg" className='mb-4 bg-light' sticky='top'>
        <Container>
          <Navbar.Brand as={Link} to = '/'>React Simple Post</Navbar.Brand>
          <Nav variant="pills" activeKey={location.pathname} defaultActiveKey="/" className='me-auto'>
            <Nav.Item>
              <Nav.Link as={Link} to="/" eventKey='/'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/posts" eventKey="/posts" >Post</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
