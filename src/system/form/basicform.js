import React,{Component} from "react";

class BasicForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : null,
        }
        this.childrenRef = [];
    }

    static getDerivedStateFromProps(props,state){
        return({
            value: state.value !== null ? state.value : 
            props.value ? props.value : ""
        });
    }

    submitData=(e)=>{
        e.preventDefault();
        let counter=0;
        for(let ref of this.childrenRef){                  
            console.log("Ref " + counter++ + " " + ref.current.getValue());
        }
        return false;
    }

    render(){
        
        return (
            <form className={"form"+this.formClass} onSubmit={this.submitData}>
                {React.Children.map(this.props.children, (child)=>{
                    if(child.props.input){
                        const reference = React.createRef();
                        this.childrenRef.push(reference);
                        return React.cloneElement(child, {ref:reference});
                    }else return child
                })}
                <hr />
                <button type="submit" className="btn btn-info float-end">
                    {this.props.submitLabel}
                </button>
            </form>
        );
    }
}

export default BasicForm;