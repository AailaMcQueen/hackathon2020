import React from "react"
import DistrictComponent from "./DistrictComponent"

class Allocation extends React.Component {
    handleReset= (event) => {
        event.preventDefault();
        this.props.history.push("/");
    }
    render(){
        const {currentState} = this.props;
        if(!currentState.isActive){
            return(
                <div className="container-fluid text-center justify-content-center">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <h1>Provide Data First!</h1>
                    <button onClick={this.handleReset} className="btn btn-lg btn-primary">Provide Data!</button>
                </div>
            )
        }
        return (
            <div className="table-responsive">
                <table className="table table-hover">
                    <caption>Allocation Data</caption>
                    <thead>
                        <tr>
                        <th scope="col">Source Type</th>
                        <th scope="col">Source District</th>
                        <th scope="col">Destination Lab</th>
                        <th scope="col">Samples Allocated</th>
                        </tr>
                    </thead>
                    <tbody>
                        <DistrictComponent sourceType={"District"} name={"Jalore"} labAlloted={"Test Lab"} swabsAlloted={400}></DistrictComponent>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Allocation;