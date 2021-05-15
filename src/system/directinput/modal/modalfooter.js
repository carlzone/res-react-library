import React,{Component} from "react";

class ModalFooter extends Component{

    render(){
        const variant = this.props.variant?this.props.variant : "danger";
        return(
            <div className="modal-footer">
                {this.props.children}
                <button type="button" className={"btn btn-"+variant} data-bs-dismiss="modal">
                    {this.props.closeLabel}
                </button>
            </div>
        );
    }

}

export default ModalFooter;