import Model from './Model.js';
import add from './../img/add.png';
import React, { Component } from 'react'
import './bootstrap.min.css';
import './../css/index.css';
//import React from 'react'
var script = document.createElement('script');
var script1 = document.createElement('script');
var script2 = document.createElement('script');
script.type = 'text/javascript';
script.async = true;
script.src = 'https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js';
script.type = 'text/javascript';
script.async = true;
script.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js";
script.type = 'text/javascript';
script.async = true;
script.src = 'bootstrap.min.js';
document.head.appendChild(script);
document.head.appendChild(script1);
document.head.appendChild(script2);
class AddQueations extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            comps: [{ id: 0 }],
            count: 0
        }
    }
    removeTimeItem(index) {
        let arr = this.state.comps.slice();
        arr.splice(index, 1);
        this.setState({ comps: arr })
    }
    /*<input className="imgicon add" id="addsection" type="image" src="img/add.png" onClick={
                    () => this.setState({ comps: comps.concat([Date.now()]), count: count++ })
    
                } />Add Section*/
    render() {
        const { comps } = this.state;
        var count = this.state.count;
        return (
            <div>
                {comps.map((comp, index) => {
                    return <Model key={index} id={index} onClickRemove={() => this.removeTimeItem()} />
                })}

                <div id="footer" className="whole bg2">
                    <div class="dropdown">
                        <button class=" btn btn-secondary dropdown-toggle button-add-question" type="button" id="dropdownMenuButton" onClick={
                            () => this.setState({ comps: comps.concat([Date.now()]), count: count++ })

                        }>
                            <input className="imgicon add bg2 input-add" id="addsection" type="image" src={add} alt="add new question" aria-label=" " /><span style={{ position: "absolute" }} >Add new question</span>
                        </button>
                        <div class="dropdown-menu content" >
                            <button class="dropdown-item" >Choice</button>
                            <a class="dropdown-item" href="https://www.baidu.com/">Essay</a>
                            <a class="dropdown-item" href="https://www.baidu.com/">Fill-in-the-blank</a>
                            <a class="dropdown-item" href="https://www.baidu.com/">Sub-question</a>
                            <a class="dropdown-item" href="https://www.baidu.com/">File upload</a>
                            <a class="dropdown-item" href="https://www.baidu.com/">Hot spot</a>
                            <a class="dropdown-item" href="https://www.baidu.com/">Image labeling</a>
                            <a class="dropdown-item" href="https://www.baidu.com/">Matching</a>
                            <a class="dropdown-item" href="https://www.baidu.com/">Media</a>
                            <a class="dropdown-item" href="https://www.baidu.com/">Ordering</a>
                        </div>
                    </div>



                </div>
            </div>

        )
    }
}
export default AddQueations;