import React from 'react'
//import React from 'react'
class InputRadio extends React.Component {
    constructor(props) {
        super(props)
        this.handleInputareaChange = this.handleInputareaChange.bind(this);
    }
    handleInputareaChange(e) {
        this.props.handleInputareaChange(e.target.value);
    }
    render() {
        return (
            <tr className="bg1">
                <td ><input type="radio" name="question-single-choice" /></td>
                <td className="input-text"><input className="border enter fontsize-input" type="text" placeholder="Enter choice value" onChange={this.handleInputareaChange} /></td>
                <td ><a href="" ><img className="imgicon bg1" src="img/delete.png" alt="" onClick={() => this.props.onClickDelete()} /></a></td>
                <td className="correct">
                    <span type="radio" className={this.props.selectedClass === false ? 'spanradio demoSpan1 spanbg1' : 'spanradio demoSpan1 spanbg2'} style={{ cursor: "pointer" }} onClick={() => this.props.onClickCorrect()}></span>
                </td>
            </tr >

        );
    }
}

export default InputRadio;