import React, { Component } from "react";

/* 
This will create the items for the navigation bar.

PROPS LIST
- name (required)
- class (optional)
- link (required)
*/
class NaviItem extends Component {

  render() {
    return (<li className="nav-item">
      <a className={"nav-link " + this.props.class} href={this.props.link}>
        {this.props.name}
      </a>
    </li>);
  }
}

export default NaviItem;
