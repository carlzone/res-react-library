import React, { Component } from "react";


/* 
This will create the items for the navigation bar.

PROPS LIST
- name (required)
- class (optional)
- link (required)
*/
const NaviItem =(props)=> {
    return (<li className="nav-item">
      <a className={"nav-link " + props.class} href={props.link}>
        {props.name}
      </a>
    </li>);
}

/* 
This will create the container for the list of the item

PROPS LIST
-position [left,right,center]
-customclass [additional class for the container]
*/
const NaviBarContainer=(props)=>{
  const position = () => {
    var position;
    switch (props.position) {
      case "left":
        position = "me-auto align-items-start";
        break;
      case "right":
        position = "ms-auto align-items-end";
        break;
      case "center":
        position = "m-auto align-items-center";
        break;
      default:
        position = "";
    }
    return position;
  };
  const customclass = props.customclass ? props.customclass : "";

  return (
    <ul className={"navbar-nav " + position() + " " + customclass}>
      {props.children}
    </ul>
  );
}

/* 
This will create a collapsable navigation content list to make it
a dropdown when the size of the screen gets small

PROPS LIST
-id (reqired)
-classtoggler (optional) [A class for the button]
-classcontainer (optional) [A class for the collapsable container]
*/
const NaviCollapse=(props)=>{
    const class_toggler = props.classtoggler
      ? props.classtoggler
      : "";
    const class_container = props.classcontainer
      ? props.classcontainer
      : "";

    return (
      <>
        <button
          className={"navbar-toggler " + class_toggler}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#" + props.id}
          aria-controls={props.id}
          aria-expanded="false"
          aria-label="Navigation toggler"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={"collapse navbar-collapse " + class_container}
          id={props.id}
        >
          {props.children}
        </div>
      </>
    );
}

/* 
This will create a branding for the navigation bar
in text or image format. Any child element will be link

PROPS LIST
- id
- class
- link
*/
const NaviBrand=(props)=>{
  const customclass = props.class ? props.class : "";
  return (
    <a
      id={props.id}
      className={"navbar-brand " + customclass}
      href={props.link}
    >
      {props.children}
    </a>
  );
}

/* 
This will create a nanigation bar component with bootstap
stylings.

PROPS LIST
-id (required)
-breakpoint (optional) [sm,md,lg,xl,xxl]
-variant (optional) [all bootstrap color]
-bgcolor (optional) [all bootstrap color]
-class (optional) [custom classes for styling]
*/
class NaviBar extends Component {
  render() {
    const breakpoint = this.props.breakpoint
      ? "navbar-expand-" + this.props.breakpoint
      : "";
    const variant = this.props.variant ? this.props.variant : "light";
    const bgcolor = this.props.bgcolor ? this.props.bgcolor : "light";
    const customclass = this.props.class ? this.props.class : "";

    return (
      <nav
        id={this.props.id ? this.props.id : ""}
        className={
          "navbar " +
          breakpoint +
          " navbar-" +
          variant +
          " bg-" +
          bgcolor +
          " " +
          customclass
        }
      >
        {this.props.children}
      </nav>
    );
  }
}

export {NaviBar as default,NaviBrand,NaviCollapse,NaviBarContainer,NaviItem};
