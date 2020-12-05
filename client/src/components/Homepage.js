import React, {Component} from "react"
import {connect} from "react-redux"
import {fetchData} from "../store/actions/actions"
  
class Homepage extends Component { 
    constructor(props){
      super(props);
      this.state = {
        districtData: null,
        labData: null
      }
    }
    onFileChange = event => {
      console.log(event.target.name);
      let newState = {
        ...this.state
      }
      if(event.target.name === "labData"){
        newState.labData = event.target.files[0];
      }
      if(event.target.name === "districtData"){
        newState.districtData = event.target.files[0];
      }
      this.setState(newState);
      console.log(this.state);
    }; 
    handleSubmit = (event) => {
      event.preventDefault();
      console.log(this.state)
      const formData = new FormData();
      formData.append( 
        "districtData", 
        this.state.districtData, 
        this.state.districtData.name 
      );
      formData.append( 
        "labData", 
        this.state.labData, 
        this.state.labData.name 
      );
      for(var pair of formData.entries()) {
        console.log(pair[0]+', '+pair[1]);
      }
      this.props.fetchData(formData);
      this.props.history.push("/");
    }
    // //  axios.post("api/uploadfile", formData); 
    render() { 
      return ( 
        <div className="text-center">
            <h1>Homepage</h1> 
            <form onSubmit={this.handleSubmit}>
              <div className="form-row align-items-center">
                <div className="col my-1">
                  <label className="sr-only" htmlFor="districtData">District Data File: </label>
                  <div className="input-group">
                    <input 
                        type="file" 
                        className="form-control" 
                        id="districtData" 
                        name="districtData"
                        onChange={this.onFileChange}
                        required
                    ></input>
                  </div>
                </div>
              </div>
              &nbsp;
              <div className="form-row align-items-center">
                <div className="col my-1">
                  <label className="sr-only" htmlFor="labData">Lab Data File: </label>
                  <div className="input-group">
                    <input 
                        type="file" 
                        className="form-control" 
                        id="labData" 
                        name="labData"
                        onChange={this.onFileChange}
                        required
                    ></input>
                  </div>
                </div>
              </div>
              <br></br>
              <div className="form-row align-items-center">
                <div className="col my-1">
                  <button className="btn btn-primary">Submit!</button>
                </div>
              </div>
            </form>
        </div> 
      ); 
    } 
  }

function mapStateToProps(state){
    return {
        currentState: state.currentState
    }
}

export default connect(mapStateToProps, {fetchData})(Homepage)