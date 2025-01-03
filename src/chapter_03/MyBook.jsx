import React, { Component } from 'react';

class MyBook extends Component {
  render() {
    return (
      <>
        <h1>{`이 책의 이름은 ${this.props.name} 입니다.`}</h1>
        <h2>이 책은 총 {this.props.numOfPage} 페이지로 이루어져 있습니다.</h2>
      </>
    );
  }
}

export default MyBook;
