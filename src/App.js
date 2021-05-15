import React,{Component} from 'react';
import './App.css';

import Header from "./system/header";
import PageView from "./system/pageview";
import TestPage from "./system/pages/testpage";
import Registration from "./system/pages/registration";
import CardTest from "./system/pages/cardtest";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: window.location
    }
  }

  render(){    
    console.log("Current Page: ",this.state.page);
    return (
      <div className="App">
        <Header />
        <PageView 
        pageNow={this.state.page}
        pageShow="/test"
        pageType="path">
          <TestPage />
        </PageView>
        <PageView 
        pageNow={this.state.page}
        pageShow="/register"
        pageType="path">
          <Registration />
        </PageView>
        <PageView 
        pageNow={this.state.page}
        pageShow="/"
        pageType="path">
          <CardTest />
        </PageView>
      </div>
    );
  }

  getInput = (name, value) => {
    this.setState({
      [name]: value
    });
  };
}

export default App;
