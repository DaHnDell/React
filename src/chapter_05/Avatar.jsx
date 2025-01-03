function Avatar(props){
  return <img className="avatar" src={props.author.avartarUrl} alt={props.author.name}/>;
}

export default Avatar;