import React, { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log("Component did mount");
  }

  componentDidUpdate(){
    console.log("Component did update");
  }

componentWillUnmount(){
    console.log("Component will unamount");
}
  render() {
    return <div>{this.props.name}</div>;
  }
}

export default UserClass;
