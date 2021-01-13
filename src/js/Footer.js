import Button from './Button.js';
import AddQueations from './AddQueations.js';
import Model from './Model.js';
//import React, { Component } from 'react';
import React from 'react'
class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comps: [{ id: 0, value: "Cannel", classname: "btn btn-outline-secondary" }, { id: 1, value: "Preview", classname: "btn btn-outline-secondary" },
            { id: 2, value: "Save as draft", classname: "btn btn-outline-secondary" }, { id: 3, value: "Complete", classname: "btn btn-info" }],
            models: [{ id: 0 }]
        }
    }
    handleUpdateData(newData) {
        this.setState({
            models: newData
        })
    }
    handleClick(value) {
        alert(value)
        switch (value) {
            case "Cannel":

                break;
            case "Preview":
                <Model />
                break;
            case "Save as draft":

                break;
            case "Complete":

                break;
            default:
                break;
        }
    }
    render() {
        const comps = this.state.comps.slice();
        const models = this.state.models.slice();
        return (
            <div>
                <div className="footerButton">
                    {comps.map((comp, index) => {
                        return <Button key={index} value={comp.value} classname={comp.classname} onClick={() => this.handleClick(comp.value)} />
                    })}
                </div>
                {models.map((model, index) => {
                    return <AddQueations key={index} id={index + 1} updateData={this.handleUpdateData} />
                })}

            </div>
        )


    }
}
export default Footer;