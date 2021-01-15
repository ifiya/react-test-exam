import InputRadio from './InputRadio.js';
import React, { Component } from 'react'
//import React from 'react'
class Model extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comps: [{ id: 0, selectedClass: false }, { id: 1, selectedClass: false }, { id: 2, selectedClass: false }, { id: 3, selectedClass: false }],
            textareaAndbutton: { bt: 0, textareaValue: '', radioInput: [] },
            click: 0
        }
        this.handleTextareaChange = this.handleTextareaChange.bind(this);
        this.handleInputareaChange = this.handleInputareaChange.bind(this);
    }
    removeTimeItem(index) {
        let arr = this.state.comps.slice();
        arr.splice(index, 1);
        this.setState({ comps: arr })
        /*const { data } = this.state;
        let arr = [...data];
        arr.splice(index, 1)
        this.setState({ comps: [...arr] });*/
        this.props.handleUpdateData(this.setState.textareaAndbutton);
    }
    //对点击的按钮进行记录
    handleClick(i) {
        //console.log("unhandleclick:" + this.state.click);
        const comps = this.state.comps.slice();
        const loc = this.state.click;
        comps[loc].selectedClass = false;
        //this.setState({ click: i ,comps:comps});

        comps[i].selectedClass = !this.state.comps[i].selectedClass;

        const textareaAndbutton = this.state.textareaAndbutton;
        textareaAndbutton.bt = i;
        this.setState({ click: i, comps: comps, textareaAndbutton: textareaAndbutton });
        //console.log("handleclick:" +this.state.textareaAndbutton.bt);
        this.props.handleUpdateData(this.setState.textareaAndbutton);
    }
    //对四个输入选项进行记录
    handleInputareaChange(inputarea, index) {
        var i = index;
        console.log(inputarea);
        const textareaAndbutton = this.state.textareaAndbutton;
        textareaAndbutton.radioInput[i] = inputarea
        this.setState({
            textareaAndbutton: textareaAndbutton
        })
        this.props.handleUpdateData(textareaAndbutton);
    }

    handleTextareaChange(e) {
        //alert(e.target.value)
        const textareaAndbutton = this.state.textareaAndbutton;
        textareaAndbutton.textareaValue = e.target.value
        this.setState({
            textareaAndbutton: textareaAndbutton
        })
        this.props.handleUpdateData(textareaAndbutton);
    }
    render() {

        var textareaAndbutton = this.state.textareaAndbutton;
        //this.props.handleUpdateData(textareaAndbutton);

        var comps = this.state.comps.slice();

        var t = [{ id: 0, selectedClass: false }]
        var id = 1
        id += this.props.id == null ? 0 : this.props.id;
        var s = Array(id - 1).fill(null)
        //squares: Array(9).fill(null),
        // console.log(this.props.id)

        return (
            <div className="whole border">
                <div >
                    <div className="title-template">
                        <select name="" id="">
                            <option value="1">1</option>
                            {s.map((s, index) => {
                                return <option key={index} selected="selected">{index + 2}</option>
                            })}
                        </select>
                &nbsp;&nbsp;Question {id}
                        <div className="setting_delete">
                            <input className="imgicon" type="image" src="img/setting.png" />
                            <input className="imgicon" type="image" src="img/delete.png" onClick={() => this.props.onClickRemove()} />
                        </div>
                    </div>

                </div><hr className="border" />
                <div className="panel">
                    <div className="question">
                        <textarea className="border fontsize-input" id="question_enter" cols="30" rows="10" value={this.state.textareaValue}
                            placeholder="Enter question content" onChange={this.handleTextareaChange}></textarea>
                        <table>
                            <tbody id="">
                                {comps.map((comp, index) => {
                                    return <InputRadio key={index} selectedClass={this.state.comps[index].selectedClass}
                                        onClickCorrect={() => this.handleClick(index)} onClickDelete={() => this.removeTimeItem(index)} value=""
                                        handleInputareaChange={(inputarea) => this.handleInputareaChange(inputarea, index)} />
                                })}
                                <tr className="addfooter fontsize-input"><td><label htmlFor={this.props.id + "-addsection-btn"}>
                                    <input className="imgicon add input-add" id={this.props.id + "-addsection-btn"} type="image" src="img/add.png" onClick={
                                        () => this.setState({ comps: comps.concat(t) })
                                    } /> <span style={{ position: "absolute" }}>Add choice</span></label>
                                </td></tr>
                            </tbody>
                        </table>

                    </div>
                    <div className="question_mark">
                        <div>
                            Marks
                    <input className="border" type="text" />
                        </div>

                    </div>
                </div>
            </div >

        )

    }
}

export default Model;