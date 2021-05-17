import React, { Component } from "react";

/* 
This is a editable label to change value of it on the fly.
PROPS LIST
- receipient (required Address for the ajax to send)
- triggerID (required Button ID)
- id (required)
- name (required)
- type (required)
- default (optional)
- placeholder (optional)
- formClass (optional)
- dispClass (optional)
*/
class EditableLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "None"
    };
  }

  render() {
    return (
      <div className={"form-group " + this.props.formClass}>
        <div className="d-grid">
          <button
            className={"btn " + this.props.dispClass}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#" + this.props.triggerID}
            aria-expanded="false"
            aria-controls={this.props.triggerID}
          >
            {this.state.value} &nbsp;
            <span className="fas fa-edit ms-auto"></span>
          </button>
        </div>
        <div className="collapse" id={this.props.triggerID}>
          <form onSubmit={this.handleSubmit}>
            <div className="input-group">
              <input
                id={this.props.id}
                name={this.props.name}
                type={this.props.type}
                className="form-control"
                value={this.state.value}
                placeholder={this.props.placeholder}
                onChange={this.updateValue}
              />
              <button
                type="submit"
                className="btn-primary"
                data-bs-toggle="collapse"
                data-bs-target={"#" + this.props.triggerID}
                aria-expanded="false"
                aria-controls={this.props.triggerID}
              >
                <i className="fas fa-save"></i>&nbsp;
                <span className="d-none d-sm-inline-block">Save</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      value: this.props.default ? this.props.default : "N/A"
    });
  }

  // Update the value of the state
  updateValue = (e) => {
    const value = e.target.value;

    this.setState({
      value: value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    /* This is the function that will send the 
    inputted data back to the server */
    const url = this.props.receipient;
    const name = this.props.name;
    const value = this.state.value;
    console.log("Sending to " + url);
    console.log("Value of " + value);
    console.log("Receiver " + name);

    return false;
  };
}

export default EditableLabel;
