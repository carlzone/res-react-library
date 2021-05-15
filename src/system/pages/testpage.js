import React, { Component } from "react";
import EditableLabel from "../directinput/editablelabel";
import ModalElem from "../directinput/modal/modalelem";
import ModalHeader from "../directinput/modal/modalheader";
import ModalBody from "../directinput/modal/modalbody";
import ModalFooter from "../directinput/modal/modalfooter";
import InOutput from "../directinput/inoutput";
import BasicForm from "../form/basicform";

class TestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }

  render() {
    return (
      <>
        <div className="container-fluid">
          <EditableLabel
            receipient="/"
            triggerID="show_name"
            id="edit_name"
            name="name_field"
            type="text"
            placeholder="Enter Here"
          />
        </div>
        <div className="container-fluid">
          <ModalElem id="modaltest" dialogOption="modal-dialog-centered" 
          titleID="modalTest" value="Edit">
            <ModalHeader close={true}>
              <h3 className="modal-title">Hello World!</h3>
            </ModalHeader>
            <form className="form" onSubmit={this.submitForm}>
              <ModalBody>
                This is the body of the modal
              </ModalBody>
              <ModalFooter closeLabel="Close" />
            </form>
          </ModalElem>
        </div>
        <div className="container-fluid">
          <InOutput editID="editableText" type="text" name="test" value="Test Value" />
        </div>
        <div className="container-fluid">
          <BasicForm submitLabel="Save" >
            <Test input={true} />
            <Test input={true} />
            <Test />
          </BasicForm>
        </div>
      </>
    );
  }

  submitForm = (e) =>{
    e.preventDefault();

    //Call axios

    return false;
  }
}

class Test extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      value : 0
    }
  }

  static getDerivedStateFromProps(props,state){
    return({
      value : props.value? props.value : state.value
    });
  }

  getValue=()=>{
    return this.state.value;
  }

  changeValue=()=>{
    this.setState({
      value: this.state.value + 2
    });
  }

  render(){
    return(
      <React.Fragment key={this.props.key}>
        <h1 className="mt-2">{"Value:" + this.state.value}</h1>
        <button type="button" onClick={this.changeValue} className="btn btn-primary">
          Change Value
        </button>
      </React.Fragment>
    );
  }

}

export default TestPage;
