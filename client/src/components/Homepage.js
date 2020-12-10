import React, {Component} from "react"
import {connect} from "react-redux"
import {fetchData} from "../store/actions/actions"
import {csv2json} from "csvjson-csv2json"
import Loader from "./loader";

const labels = ["District Data File!", "Lab Data File!"];

let fileReader, fileReader1;
class Homepage extends Component { 
    constructor(props){
      super(props)
      this.state = {
        districtData: null,
        labData: null,
        flag: 0
      }
    }

    onFileChange = event => {
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
    }; 
    handleSubmit = (event) => {
      event.preventDefault();
      const filesCSV = [];
      let newState = {
        ...this.state
      }
      newState.flag = 1;
      this.setState(newState)
      fileReader = new FileReader();
      fileReader.onloadend = async (e) => { 
        const content = await fileReader.result
        let a = csv2json(content, {parseNumbers: true})
        filesCSV.push(a)
      };
      fileReader.readAsText(this.state.districtData);
      fileReader1 = new FileReader();
      fileReader1.onloadend = async (e) => { 
        const content = await fileReader1.result
        let a = csv2json(content, {parseNumbers: true})
        filesCSV.push(a)
      };
      fileReader1.readAsText(this.state.labData);
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
      this.props.fetchData(formData, filesCSV).then(()=>{
        this.props.history.push("/allocation");
      })
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
      if(currentState.isActive)
      return (
        <div className="container-fluid text-center justify-content-center">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <h1>Data already provided!</h1>
          <button onClick={this.handleReset} className="btn btn-lg btn-primary">Provide New Data!</button>
        </div>
      )
      else if(this.state.flag===0) 
      return ( 
        <div>
          <h1>Welcome!</h1>
          <div id="accordion">
            <div className="card">
              <div className="card-header" id="infoId">
                <button style={{width: "100%"}} className="btn" data-toggle="collapse" data-target="#infoCollapse" aria-expanded="true" aria-controls="infoCollapse">
                <h5>How this works?</h5>
                </button>
              </div>

              <div id="infoCollapse" className="collapse" aria-labelledby="infoId" data-parent="#accordion">
                <div className="card-body">
                  <ul>
                    <li>
                      <p>As first input, we provide District Data in .csv file format. Similarly, as second input, we provide Lab Data.</p>
                    </li>
                    <li>
                      <p>After submitting the required files, you will be redirected to Allocation Tab where we display each step in a Tabular form(Not mandatorily sorted).</p>
                    </li>
                    <li>
                      <p>In Aggregate Tab, we display each Lab's state in Tabular form(Capacity, backlogs etc.).</p>
                    </li>
                    <li>
                      <p>In Map Tab, we map each district of Karnataka(Not By Scale), and shade them with appropriate density based on no. of swabs originating from there. <br></br>
                      District with Maximum number of cases is displayed in Red. On hovering/tapping over each district, we display its information.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
            <div className="container">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                  <button type = "submit" className="btn btn-primary">Submit!</button>
                </div>
              </div>
            </form>
            </div>
        </div>
      )
      else return (
        <Loader></Loader>
      )
    } 
  }

function mapStateToProps(state){
    return {
        currentState: state.currentState
    }
}

export default connect(mapStateToProps, {fetchData})(Homepage)