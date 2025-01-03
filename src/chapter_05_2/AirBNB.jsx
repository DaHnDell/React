import React from 'react';

const airbnbStyle = {
  wrapper: {
    margin: 10,
    padding: 5,
    display: "inline-block",
    border: "1px solid",
    backgroundColor: "gainsboro",
  },

  image: {
    display:"column",
    // height: 400
  },

  contentTitle: {
    color : "white",
    fontSize : 25,
  },

  contentText: {
    color: "white",
    fontSize: 20,
  },

  contentBox: {
    padding : 3,
    height: 200,
  },

}

const AirBNB = (props) => {
  return (
    <div style={airbnbStyle.wrapper}>
      <img style={airbnbStyle.image} src={props.imageSrc} alt={props.title}/>
      <hr/>
      <div style={props.style}>
        <div style={airbnbStyle.contentBox}>
            <div style={airbnbStyle.contentTitle}>{props.title}</div>
            <div style={airbnbStyle.contentText}>{props.text}</div>
        </div>
      </div>
    </div>
  );
}

export default AirBNB;
