import React, { Component } from "react";
/* 
This component is a child component of the Dropdown component.

PROPS LIST
-type
-id

--if type button--
-name
-value
-callback

--if type anchor--
-label
-link
*/
class DropList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    var list;
    switch (this.props.type) {
      case "button":
        list = this.buttonList();
        break;
      case "anchor":
        list = this.anchorList();
        break;
      default:
        list = "";
    }

    return <li key={"key_" + this.name + Date.now()}>{list}</li>;
  }

  /* 
  This will return the value back to the parent and set state value at the same time 
  */
  sendValue = (e) => {
    this.props.returnValue(e.target.value);
    this.setState({ value: e.target.value });
  };

  /* 
  Create a anchor list that has a required props of
  label and link
  */
  anchorList = () => (
    <a id={this.props.id} className="dropdown-item" href={this.props.link}>
      {this.props.label}
    </a>
  );

  /* 
  Create a button list that return a value back to parent.
  Required props on initialize are the following:
  name, value, and callback function
  */
  buttonList = () => (
    <input
      type="button"
      id={"drop_list_" + this.props.id + "_id"}
      name={this.props.name}
      className="dropdown-item"
      value={this.props.value}
      onClick={this.sendValue}
    />
  );
}

export default DropList;
