import React, {Component} from "react"
import {connect} from "react-redux"
import {fetchData} from "../store/actions/actions"

const labels = ["District Data File!", "Lab Data File!"];
  
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
        labels[1] = newState.labData.name;
      }
      if(event.target.name === "districtData"){
        newState.districtData = event.target.files[0];
        labels[0] = newState.districtData.name;
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
      this.props.history.push("/allocation");
    }
    handleReset= (event) => {
      event.preventDefault();
      labels[0] = "District Data File!"
      labels[1] = "Lab Data File!"
      this.props.resetData();
      this.props.history.push("/");
    }
    // //  axios.post("api/uploadfile", formData); 
    render() { 
      const {currentState} = this.props;
      return (currentState.isActive)?(
        <div className="container-fluid text-center justify-content-center">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <h1>Data already provided!</h1>
          <button onClick={this.handleReset} className="btn btn-lg btn-primary">Provide New Data!</button>
        </div>
      ):( 
        <div className="text-center">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <h1>Homepage</h1> 
            <form onSubmit={this.handleSubmit}>
              <div className="input-group mb-3">
                <div className="custom-file">
                  <input 
                      type="file" 
                      className="form-control custom-file-input" 
                      id="districtData" 
                      name="districtData"
                      onChange={this.onFileChange}
                      required
                  ></input>
                  <label className="custom-file-label" htmlFor="districtData">{labels[0]}</label>
                </div>
              </div>
              &nbsp;
              <div className="input-group mb-3">
                <div className="custom-file">
                  <input 
                      type="file" 
                      className="form-control custom-file-input" 
                      id="labData" 
                      name="labData"
                      onChange={this.onFileChange}
                      required
                  ></input>
                  <label className="custom-file-label" htmlFor="labData">{labels[1]}</label>
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