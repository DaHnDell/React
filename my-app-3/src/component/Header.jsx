import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      {/* Router의 Link 컴포넌트는 직접접 페이지 이동을 담당한다 */}
      {/* path relative : ../ ./ / 상대 경로 지정 가능 */}
      <h1>React Sample Post</h1>
      {/* <p><a href='/'>HOME</a></p>
      <p><a href='/posts'>POST</a></p> */}
      <Link to='/'>HOME</Link>
      <Link to='/posts'>POST</Link>
    </div>
  );
}

export default Header;
