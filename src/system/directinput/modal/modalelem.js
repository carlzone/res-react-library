import React,{Component} from "react";

/* 
This component will create a modal container.

PROPS LIST
- id (reqired)
- titleID (required)
- dialogOption (optional)
*/
class ModalElem extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: null
        }
    }

    static getDerivedStateFromProps(props,state){
        const value = state.value!==null ? state.value : 
            props.value?props.value:"";
        
        return({
            value: value
        });       
    }

    render(){
        return(<React.Fragment key={"key_"+Date.now()+"_modal"}>
            <div className="d-grid">
                <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target={"#"+this.props.id}>
                    {this.state.value}
                </button>
            </div>
            <div className="modal fade" id={this.props.id} data-bs-backdrop="static" 
            data-bs-keyboard="false" tabIndex="-1" 
            aria-labelledby={this.props.titleID} aria-hidden="true">
                <div className={"modal-dialog " + this.props.dialogOption}>
                    <div className="modal-content">
                        {this.props.children}
                    </div>
                </div>
            </div>
        </React.Fragment>);
    }

}

export default ModalElem;