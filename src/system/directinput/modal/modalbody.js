import React,{Component} from "react";

class ModalBody extends Component{

    render(){
        const classStyle = this.props.class ? this.props.class : "";
        return(
            <div className={"modal-body " + classStyle}>
                {this.props.children}                
            </div>
        );
    }

}

export default ModalBody;