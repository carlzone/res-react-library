import React from "react";

/* 
This is a component for the checkbox input that have Bootstrap 5 setting
PROPS LIST
-inline (optional)
-customcss (optional)
-name
-id
-value
-label
-returnValue
*/
class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  render() {
    // This will initialize checkbox to be placed horizontally
    const horizontal = this.props.inline ? "form-check-inline" : "";
    // This will check if a custom css for the label is available
    const custcss = this.props.customcss ? this.props.customcss : "";
    return (
      <div className={"form-check " + horizontal}>
        <input
          className="form-check-input"
          type="checkbox"
          name={this.props.name}
          id={"check_" + this.props.id + "_id"}
          value={this.props.value}
          onChange={this.updateValue}
        />
        <label
          className={"form-check-label " + custcss}
          htmlFor={this.props.id}
        >
          {this.props.label}
        </label>
      </div>
    );
  }

  /* 
  This will update the value state and return it 
  back to the parent component
  */
  updateValue = (e) => {
    // This will check if the change is checked or not
    const value = e.target.checked === true ? e.target.value : "";
    this.setState({
      value: value
    });
    this.props.returnValue(this.props.name, value);
  };
}

export default CheckBox;
