import React from "react";
import { connect } from "react-redux"
import { Switch, Route, withRouter} from "react-router-dom"
import Map from "./Map"
import Aggregate from "./Aggregate"
import Allocation from "./Allocation"
import Homepage from "./Homepage"
import {fetchData} from "../store/actions/actions"

const Main = props => {
    const {currentState, fetchData} = props;
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" render={ props => <Homepage currentState={currentState} fetchData={fetchData} {...props}/>}></Route>
                <Route exact path="/aggregate" render={ props => <Aggregate fetchData={fetchData} currentState={currentState} {...props}/>}></Route>
                <Route exact path="/allocation" render={ props => <Allocation fetchData={fetchData} currentState={currentState} {...props}/>}></Route>
                <Route exact path="/map" render={ props => <Map fetchData={fetchData} currentState={currentState} {...props}/>}></Route>
            </Switch>
        </div>
    )
}

function mapStateToProps(state){
    return {
        currentState: state.currentState,
    }
}

export default withRouter(connect(mapStateToProps, {fetchData})(Main));