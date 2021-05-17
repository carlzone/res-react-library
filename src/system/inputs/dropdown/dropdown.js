import React from "react";



/* 
This will create component for the dropdown
menu that returns a value on selected

PROPS LIST
-classCustom
-d2right
*/
class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "none"
    };
  }

  render() {
    let classCustom = this.props.classCustom
      ? this.props.classCustom
      : "btn-info";
    let align_right = this.props.align_right ? "dropdown-menu-end" : "";
    return (
      <div className="dropdown">
        <div className="d-grid">
          <button
            id={"drop_toggler_" + this.props.id + "_id"}
            type="button"
            className={"btn " + classCustom + " dropdown-toggle"}
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {this.props.name}
          </button>
          <ul className={"dropdown-menu " + align_right}>
            {this.props.children}
          </ul>
        </div>
      </div>
    );
  }

  updateSelected = (e) => {
    const value = e.target.value !== "-NONE-" ? e.target.value : "";
    this.props.returnValue(
      this.props.name.toLowerCase().replace(" ", "_"),
      value
    );
    this.setState({
      selected: value
    });
  };
}

export default Dropdown;
