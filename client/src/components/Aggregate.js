import React from "react"
import LabComponent from "./LabComponent"

class Aggregate extends React.Component {
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
                    <caption>Aggregate Data</caption>
                    <thead>
                        <tr>
                        <th scope="col">S. No.</th>
                        <th scope="col">Lab Name</th>
                        <th scope="col">Capacity</th>
                        <th scope="col">Allocation</th>
                        <th scope="col">Backlog</th>
                        </tr>
                    </thead>
                    <tbody>
                        <LabComponent id={1} capacity={400} name={"Test Lab, Jalore"} backlog={20} allocation={400}></LabComponent>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Aggregate;