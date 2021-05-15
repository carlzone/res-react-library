import React,{Component} from "react";

class ModalHeader extends Component{

    render(){
        const closebtn = this.props.close? <button type="button" className="btn-close" 
        data-bs-dismiss="modal" aria-label="Close"></button> : "";
        return(
            <div className="modal-header">
                {this.props.children}
                {closebtn}
            </div>
        );
    }

}

export default ModalHeader;