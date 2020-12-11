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
        const answer=currentState.formData, districts=currentState.filesCSV[0], labs=currentState.filesCSV[1];
        const table = labs.map((data, i)=> {
            var allocation=0;
            let labDist = districts.find((d)=>parseInt(data.district_id) === parseInt(d.district_id))
            answer.forEach((ans)=>{
                if(parseInt(ans.destination) === data.id &&parseInt(ans.transfer_type) === 0){
                    allocation+=ans.samples_transferred
                }
            })
            return (<LabComponent 
                        key={i}
                        id={data.id} 
                        capacity={data.capacity} 
                        name={((data.lab_type===0)?"Govt. Lab":"Private Lab") +", "+ labDist.district_name}
                        backlog={data.backlogs} 
                        allocation={allocation}
                    ></LabComponent>)
        })
        return (
            <div style={{fontSize: "0.9rem"}} className="table-responsive">
                <table className="table table-hover">
                    <caption>Aggregate Data</caption>
                    <thead>
                        <tr>
                        <th scope="col">Lab ID</th>
                        <th scope="col">Lab Name</th>
                        <th scope="col">Capacity</th>
                        <th scope="col">Allocation</th>
                        <th scope="col">Backlog</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Aggregate;