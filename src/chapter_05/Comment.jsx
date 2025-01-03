import UserInfo from "./UserInfo";

const Comment = function(props){
  const {author, text, date} = props;
  const eles = 
    <div className="comment">
      <UserInfo author={author}/>
      <div className="comment-start">{text}</div>
      <div className="comment-end">{formatDate(date)}</div>
    </div>;
  return eles;
}

function formatDate(date){
  return new Date(date).toLocaleDateString('ko-KR');
}

export default Comment;