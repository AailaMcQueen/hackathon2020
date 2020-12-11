import React from "react"
import MapSupp from "./MapSupp"



class Map extends React.Component {
    
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
            <div style={{overflow: "hidden"}}>
                <MapSupp currentState={currentState}></MapSupp>
            </div>
        )
    }
}

export default Map;