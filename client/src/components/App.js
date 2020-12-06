import React from "react"
import Navbar from "./Navbar"
import {Provider} from "react-redux";
import {configureStore} from "../store"
import { BrowserRouter as Router } from "react-router-dom"
import Main from "./Main"

const store = configureStore();

class App extends React.Component {
  render(){
    return (
      <Provider store = {store}>
        <Router>
          <div className="body-main">
            <Navbar></Navbar>
            <br></br>
            <br></br>
            <Main></Main>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App;
