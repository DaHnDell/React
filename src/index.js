import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NumberList from './chapter_10/NumberList';
import AttendanceBook from './chapter_10/AttendanceBook';
import MyForm from './chapter_11/MyForm';
import Multiple from './chapter_11/Multiple';
import Calculator from './chapter_12/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      {/* <MyEvent/> */}
      {/* <LandingPage/> */}
      {/* <NumberList numbers = {[1, 2, 3, 4, 5]}/> */}
      {/* <AttendanceBook/> */}
      {/* <MyForm/> */}
      {/* <Multiple/> */}
      <Calculator/>
    </React.StrictMode>
  );
reportWebVitals();