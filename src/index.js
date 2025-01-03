import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AirBnBList from './chapter_05_2/AirBnBList';
import NotificationList from './chapter_06/NotificationList';

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(()=> {
  
  root.render(
    <React.StrictMode>
      {/* <AirBnBList/>
       */}
       <NotificationList />
    </React.StrictMode>
  );

});

reportWebVitals();