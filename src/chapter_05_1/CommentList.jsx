import React from 'react';
import Comment from './Comment';

const CommentList = (props) => {
  return (
    <div>
      <Comment name = {"HM"} comment={"My first Component"}/>
      <Comment name = {"JY"} comment={"I Like React"}/>
      <Comment name = {"YT"} comment={"I am Console Warrior"}/>
    </div>
  );
}

export default CommentList;
