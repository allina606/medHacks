import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'tachyons';
// import CivicAPI from "./civicAPI.js";

class HomePage extends Component {

  constructor() {
    super();
    this.state = {
      data:{}
    };
  }

  render() {
    return (
      <div className="container items-center">
        <div className="flex flex-wrap justify-between items-center">
          <div className="row">
            <div className="col bigText1">
              Surviving Sepsis Worldwide<br />
             <br />
              Upload your <span className="highlight">patient file here</span>!<br />                       
            </div>
          </div> 
          <img className="o-50" src="https://www.swansonreed.com/wp-content/uploads/2015/02/map-usa-s.png" width="560px" height="320px" />
        </div>
        <div className="flex justify-center bigText2 mt5">              
          
        {/* ENTER UPLOAD CSV FILE HERE */}
          <p>Enter patient: <br /></p>
          <input
            type = "text"
            placeholder="data"
            className="text-center fr ml3"
          />
          <Link className="arrow flex fn justify-center" to="/data"><img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-forward-512.png" height="50" width="50"/></Link>                    
        </div>
      </div>        
    )
  }
}

export default HomePage;
