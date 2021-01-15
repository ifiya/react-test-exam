import Model from './Model.js';
import DropTable from './DropTable.js';
import React from 'react'
import './bootstrap.min.css';
import './../css/index.css';
import add from './../img/add.png'
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
            count: 0,
            droplinkValues: ["Choice", "Essay", "Fill-in-the-blank", "Sub-question", "File upload", "Hot spot", "Image labeling", "Matching", "Media", "Ordering"]
        }
    }
    onClickDrop(droplinkValue) {

        var { comps } = this.state;
        var count = this.state.count;
        this.setState({ comps: comps.concat([Date.now()]), count: count++ })
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
        var { comps } = this.state;
        let droplinkValues = this.state.droplinkValues.slice();
        return (
            <div>
                {comps.map((comp, index) => {
                    return <Model key={index} id={index} onClickRemove={() => this.removeTimeItem()} handleUpdateData={(textareaAndbutton) => this.props.handleUpdateData(textareaAndbutton)} />
                })}
                <div id="footer" className="whole bg2">
                    <div className="dropdown">
                        <button className=" btn btn-secondary dropdown-toggle button-add-question" type="button" id="dropdownMenuButton" data-toggle="dropdown">
                            <input className="imgicon add bg2 input-add" id="addsection" type="image" src={add} alt="img" aria-label="img" /><span style={{ position: "absolute" }}>Add new question</span>
                        </button>
                        <div className="dropdown-menu content" >

                            {droplinkValues.map((droplinkValue) => {
                                return <DropTable value={droplinkValue} key={droplinkValue.toString()} onClickDrop={
                                    () => this.onClickDrop(droplinkValue)} />
                            }
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddQueations;