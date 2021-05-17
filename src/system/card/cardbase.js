import React,{Component} from "react";

import EditableLabel from "../directinput/editablelabel";

class CardBase extends Component{

    render(){

        const cardStyle = {
            "minWidth":320,
            "maxWidth":400
        };
        const cardBodyStyle = {
            "backgroundColor":"royalblue"
        }

        return(<div className="card my-2 mx-0 mx-sm-2 shadow" style={cardStyle}>
            <div className="card-header rounded-top text-start d-flex align-items-center">
                <span>Teacher:</span>&nbsp;
                <span className="fw-bolder ts-2">Teacher Name</span>
                <button type="button" className="btn btn-light text-primary ms-auto">
                    <i className="fas fa-sign-in-alt"></i>
                </button>
            </div>
            <div className="card-body text-light text-start py-0" style={cardBodyStyle}>
                <div className="row border-bottom py-1">
                    <div className="col-4"><strong className="m-0 p-0">Date</strong></div>
                    <div className="col">
                        <EditableLabel 
                            recepient="/"
                            triggerID="date_id" 
                            id="dateID" 
                            name="sched_date"
                            type="date"
                            default="2021-06-10"
                            dispClass="d-flex align-items-center text-light text-start p-0 m-0 fw-bold" />
                    </div>
                </div>
                <div className="row border-bottom py-1">
                    <div className="col-4"><strong className="m-0 p-0">Time</strong></div>
                    <div className="col">
                        <EditableLabel 
                            recepient="/"
                            triggerID="time_id" 
                            id="timeID" 
                            name="sched_time"
                            type="time"
                            default="14:24"
                            dispClass="d-flex align-items-center text-light text-start p-0 m-0 fw-bold" />
                    </div>
                </div>
                <div className="row py-1">
                    <div className="col-4"><strong className="m-0 p-0">Duration</strong></div>
                    <div className="col">
                        <EditableLabel 
                            recepient="/"
                            triggerID="duration_id" 
                            id="durationID" 
                            name="sched_duration"
                            type="text"
                            default="3 hrs"
                            dispClass="d-flex align-items-center text-light text-start p-0 m-0 fw-bold" />
                    </div>
                </div>
            </div>
            <div className="card-footer text-start">
                <span class="badge bg-secondary">Pending</span>
            </div>
        </div>);
    }

}

export default CardBase;