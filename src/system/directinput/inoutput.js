import React,{Component} from "react";

class InOutput extends Component {

    constructor(props){
        super(props);
        this.state = {
            mode:"display",
            value: null
        }
        this.oldMode = "display";
    }

    static getDerivedStateFromProps(props,state){
        const value = state.value!==null ? state.value :
        props.value ? props.value : "";
        return({
            value: value
        });
    }

    componentDidUpdate(){
        if(this.state.mode == "edit" && this.oldMode !== this.state.mode){
            const editableText = document.getElementById(this.props.editID);
            editableText.focus();
        }
    }

    render(){
        
        const mode=()=>{
            var display;
            
            switch(this.state.mode){
                case "display":
                    display = (
                    <div className="d-grid">
                        <input type="button" className="btn btn-outline-primary"
                        value={this.state.value}
                        onClick={this.changeMode} />
                    </div>
                    );
                    break;
                case "edit":
                    display = (
                    <form onSubmit={this.sendUpdate} className="form">
                        <div className="input-group">
                            <button type="button" className="btn btn-info" onClick={this.changeMode}>
                                <i className="fas fa-arrow-left"></i>
                            </button>
                            <input id={this.props.editID} className="form-control"
                            type={this.props.type} name={this.props.name}
                            value={this.state.value} onChange={this.updateValue} />
                            <button type="submit" className={"btn btn-success"}>
                                <span className="d-none d-md-inline-block">Save</span>&nbsp;
                                <i className="fas fa-save"></i>
                            </button>                        
                        </div>
                    </form>
                    );
                    break;
                default: display="";
            }
            return display;
        };        

        return(
        <div className="form-group">
            {mode()}
        </div>
        );
    }

    updateValue=(e)=>{
        this.setState({
            value : e.target.value
        });
    }

    changeMode=()=>{
        this.oldMode = this.state.mode;
        const mode = this.state.mode === "display"? "edit" : "display";
        this.setState({
            mode : mode
        });
    }

}

export default InOutput;