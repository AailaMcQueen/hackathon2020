import React from "react"

class Map extends React.Component {
    render(){
        const {currentState} = this.props;
        if(!currentState.isActive){
            return(
                <div>
                    <h1>Provide data first!</h1>
                </div>
            )
        }
        return (
            <div>
                <h1>Data provided!</h1>
            </div>
        )
    }
}

export default Map;