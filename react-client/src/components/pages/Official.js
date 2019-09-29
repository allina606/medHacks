import React from 'react';
import 'tachyons';
import { Link } from 'react-router-dom';
// import'./Official.css';


const Official = (props) => {
  return (
    <div className="black dim db ma2 mw7 w-30 pa2 br2 ba b--black-10 shadow-1">
      <img className="center db mt3 mw-30 br-100 ba dib" src={props.image} alt="<No image>" height="130" width="130" /> <hr />
      <div className="col">
        <p className="db center mb2 mw-100"><strong></strong>{props.name}<br />
        <strong> </strong>{props.party}<br />
        <strong> </strong>{props.office}</p>
        <Link className="" to=""></Link>
      </div>
    </div>
  );
}

export default Official;