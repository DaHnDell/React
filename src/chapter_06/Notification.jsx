import React, { Component } from 'react';

const styles = {
  wrapper: {
    marging: 8,
    padding: 8,
    display: "flex",
    border: "1px solid grey",
  },

  messageText: {
    color: "black",
    fontsize: 16,
  },
}

class Notification extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.wrapper}>
        <span style={styles.messageText}>
          {this.props.message}
        </span>
      </div>
    );
  }
}

export default Notification;
