// function Welcome(props){
//   return <h1> 안녕, {props.name} </h1>;
// }

import { Component } from "react"

class Welcome extends Component{
  // constructor(props){
  //   this.props = props; 
  // }
  render(){
    return <h1> Hello, {this.props.name} </h1>
  }
}

export default Welcome;