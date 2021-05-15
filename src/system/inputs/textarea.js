import React from "react";

/* 
This component will create an input for a textarea
that is compatible with the react library

PROPS LIST
-name
-cols
-rows
*/
class TextArea extends React.Component {
  // Initialize the value of the textarea
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  // Display the DOM Elements
  render() {
    return (
      <div className="form-group">
        <textarea
          id={"textarea_" + this.props.id + "_id"}
          className="form-control"
          rows={this.props.rows}
          value={this.state.value}
          onChange={this.updateValue}
        />
      </div>
    );
  }

  /* 
  This will update the value of the textarea
  everytime the user input something.
  */
  updateValue = (e) => {
    const value = e.target.value;

    this.props.returnValue(this.props.name.replace(" ", "_"), value);
    this.setState({
      value: value
    });
  };
}

export default TextArea;
