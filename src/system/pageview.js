import React, { Component } from 'react';

/* 
This is where it controls the page changing without
refreshing the entire page.

PROPS LIST
- current (required)
- page (required)
- class (optional)
*/
class PageView extends Component {

  render() {
    const showPage = this.showPage();
    return <>{showPage}</>;
  }

  showPage = () => {
    var pagecontent = "";
    if (this.pageType()) {
      pagecontent = (
        <div className={this.props.class}>{this.props.children}</div>
      );
    }
    return pagecontent;
  };

  pageType=()=>{

    let currentPage;
    var show = false;
    switch(this.props.pageType){
      case "hash":
        currentPage = this.props.pageNow.hash
        if(this.props.pageShow === currentpage ||
        (this.props.pageShow === "" && currentPage === "")){
          show = true;
        }
        break;
      case "path":
        currentPage = this.props.pageNow.pathname;
        if(this.props.pageShow === currentPage){
          show = true;
        }
    }
    return show;
  }

}

export default PageView;
