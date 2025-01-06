import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NumberList from './chapter_10/NumberList';
import AttendanceBook from './chapter_10/AttendanceBook';

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      {/* <MyEvent/> */}
      {/* <LandingPage/> */}
      {/* <NumberList numbers = {[1, 2, 3, 4, 5]}/> */}
      <AttendanceBook/>
    </React.StrictMode>
  );
reportWebVitals();