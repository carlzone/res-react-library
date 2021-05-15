import React,{Component} from "react";

class CardBase extends Component{

    render(){

        const cardStyle = {
            "minWidth":320,
            "maxWidth":400
        };
        const cardBodyStyle = {
            
        }

        return(<div className="card" style={cardStyle}>
            <div className="card-body">
                <p>Aute ipsum ut nisi sint occaecat laboris nisi id in elit fugiat. 
                    Enim nulla aliquip velit minim non sit eiusmod labore veniam 
                    excepteur ea id. Proident ex est incididunt non irure id cillum 
                    deserunt minim nostrud aliqua minim. Qui velit do nostrud exercitation. 
                    Deserunt quis non occaecat id exercitation culpa et ut sit 
                    laborum fugiat laboris quis.</p>
            </div>
        </div>);
    }

}

export default CardBase;