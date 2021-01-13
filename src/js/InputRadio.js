import deletes from './../img/delete.png';
import React, { Component } from 'react'
//import React from 'react'
class InputRadio extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedClass: ""
        }
    }

    render() {
        //this.state.selectedClass = this.props.selectedClass;
        return (
            <tr className="bg1">
                <td ><input type="radio" name="question-single-choice" /></td>
                <td className="input-text"><input className="border enter fontsize-input" type="text" placeholder="Enter choice value" /></td>
                <td ><img src={deletes} className="imgicon bg1" alt="" onClick={() => this.props.onClickDelete()} /></td>
                <td className="correct">
                    <span type="radio" className={this.props.selectedClass === false ? 'spanradio demoSpan1 spanbg1' : 'spanradio demoSpan1 spanbg2'} style={{ cursor: "pointer" }} onClick={() => this.props.onClickCorrect()}></span>
                </td>
            </tr >

        );
    }
}
export default InputRadio;