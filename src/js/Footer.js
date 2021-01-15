import Button from './Button.js';
import Preview from './Preview.js';
import AddQueations from './AddQueations.js';
//import React, { Component } from 'react';
import React from 'react'
class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comps: [
                { id: 0, value: "Cannel", classname: "btn btn-outline-secondary" }, { id: 1, value: "Preview", classname: "btn btn-outline-secondary" },
                { id: 2, value: "Save as draft", classname: "btn btn-outline-secondary" }, { id: 3, value: "Complete", classname: "btn btn-info" }
            ],
            models: [{ id: 0 }],
            previewOnclick: false,
            buttonValue: '',
            textareaAndbutton: { bt: 0, textareaValue: '', radioInput: [] }
        }
    }
    handleUpdateData(textareaAndbutton) {
        this.setState({
            textareaAndbutton: textareaAndbutton
        })
        /*window.localStorage.setItem("a",textareaAndbutton);
        var a = window.localStorage.getItem("a");*/
    }
    handleClick(value) {
        const previewOnclick = this.state.previewOnclick;
        switch (value) {
            case "Cannel":
                break;
            case "Preview":
                this.setState({ previewOnclick: !previewOnclick, buttonValue: value })
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
        const textareaAndbutton = this.state.textareaAndbutton;
        if (this.state.previewOnclick) {
            return (
                <div>
                    {
                        models.map((model, index) => {
                            return <Preview key={index} tAb={textareaAndbutton} />
                        })
                    }
                    <div className="footerButton">
                        {models.map((model, index) => {
                            return <Button key={index} value="Exit" classname="btn btn-info" onClick={() => this.handleClick(this.state.buttonValue)} />
                        })}
                    </div>
                </div>)
        } else {
            return (<div>
                <div className="footerButton">
                    {comps.map((comp, index) => {
                        return <Button key={index} value={comp.value} classname={comp.classname} onClick={() => this.handleClick(comp.value)} />
                    })}
                </div>,
                {models.map((model, index) => {
                    return <AddQueations key={index} id={index + 1} handleUpdateData={(textareaAndbutton) => this.handleUpdateData(textareaAndbutton)} />
                })}

            </div>
            )
        }
    }
}

export default Footer;