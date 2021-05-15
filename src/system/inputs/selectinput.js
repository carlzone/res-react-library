import React from "react";

/* 
This is a component for select input that
is compatible with the react library

PROPS LIST
-selections
-name
-class
-arialabel
*/
class SelectInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "none"
    };
  }

  render() {
    var options = [];
    if (this.props.selections) {
      let count = 0;
      for (let opt of this.props.selections) {
        options.push(
          <option key={"key_" + opt + "_" + count++} value={opt}>
            {opt}
          </option>
        );
      }
    }

    return (
      <select
        id={this.props.id}
        name={this.props.name}
        value={this.state.value}
        className={"form-select " + this.props.class}
        aria-label={this.props.name}
        onChange={this.updateValue}
      >
        <option value="none">--NONE--</option>
        {options}
      </select>
    );
  }

  updateValue = (e) => {
    const value = e.target.value !== "none" ? e.target.value : "";
    this.props.returnValue(this.props.name, value);
    this.setState({
      value: value
    });
  };
}

export default SelectInput;
