import React,{Component} from "react";

import CardBase from "../card/cardbase";

class CardTest extends Component {

    render(){
        
        return(<>
            <div className="container-md d-flex flex-wrap flex-row justify-content-center justify-content-md-start">
                <CardBase />
                <CardBase />
            </div>
        </>);
    }

}

export default CardTest;