import React, { Component } from "react";

class IFrame extends Component {
  constructor(props) {
    super(props);
    this.state = {
        input: "",
        search: ""
    };
  }

  updateSearch=(e)=>{
    this.setState({
        input: e.target.value
    });
  }

  updateBtnSearch=()=>{
    this.setState({
        search: this.state.input
    });
  }

  render() {
    const iframeStyle={
        "minHeight":"80vh"
    }
    return (
      <>
        <div className="container-fluid">
            <textarea className="form-control" value={this.state.input} onChange={this.updateSearch} rows="5"></textarea>
            <button type="button" onClick={this.updateBtnSearch} className="btn btn-primary float-start">Search</button>
            <iframe style={iframeStyle} 
            title="Google Search" 
            className="container-sm my-2" 
            src={"https://www.google.com/search?igu=1&ei=&q="+this.state.search}></iframe>
        </div>
      </>
    );
  }
}

export default IFrame;
