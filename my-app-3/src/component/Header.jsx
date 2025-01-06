import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Nav, Navbar} from 'react-bootstrap';

const Header = () => {
  return (
    <>
      {/* Router의 Link 컴포넌트는 직접접 페이지 이동을 담당한다 */}
      {/* path relative : ../ ./ / 상대 경로 지정 가능 */}
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link}>React Simple Post</Navbar.Brand>
          <Nav variant="pills" defaultActiveKey="link-0" className='me-auto'>
            <Nav.Item>
              <Nav.Link as={Link} to="/" eventKey="link-0">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/posts" eventKey="link-1">Post</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
