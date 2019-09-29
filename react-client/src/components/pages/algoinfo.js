import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Iframe from 'react-iframe'
import 'tachyons';


class algoinfo extends Component {
    constructor() {
        super();
        this.state = {
          data:{}
        };
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className = "bigText2"> 
                        <div>
                            heading <br />
                            heading2 <br />
                        </div>
                        <input
                            type = "text"
                            placeholder="search..."
                            className="h3 text-center flex self-end"
                        />

                        <br />
                        <br /> 
                    </div>

                    <div className="flex flex-wrap tc pa3 pa5-ns"> 
                    </div>
                </div>
            </div>
        )
    }
}

export default algoinfo;