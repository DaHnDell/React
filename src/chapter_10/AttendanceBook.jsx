import React from 'react';

const students = [
  {id:1, name:"Son"},
  {id:2, name:"Park"},
  {id:3, name:"Kim"},
  {id:4, name:"Lee"},
  {id:5, name:"Hwang"}
]

const AttendanceBook = () => {
  return (
    <ul>
      {students.map((students, index) => {
        return <li key={students.id}>{students.name}</li>
      })}
    </ul>
  );
}

export default AttendanceBook;
