import InputRadio from './InputRadio.js';
import add from './../img/add.png';
import setting from './../img/setting.png';
import deletes from './../img/delete.png';
import React, { Component } from 'react'
//import React from 'react'
class Model extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comps: [{ id: 0, selectedClass: false }, { id: 1, selectedClass: false }, { id: 2, selectedClass: false }, { id: 3, selectedClass: false }],
            click: 0
        }
    }

    handleClick(i) {
        const loc = this.state.click;
        this.state.comps[loc].selectedClass = false;
        this.setState({ click: i });

        const comps = this.state.comps.slice();
        comps[i].selectedClass = !this.state.comps[i].selectedClass;
        this.setState({ comps: comps });

    }
    removeTimeItem(index) {
        let arr = this.state.comps.slice();
        arr.splice(index, 1);
        this.setState({ comps: arr })
        /*const { data } = this.state;
        let arr = [...data];
        arr.splice(index, 1)
        this.setState({ comps: [...arr] });*/
    }
    //href="javascript:void(0);" onClick={this.removeTimeItem.bind(this, this.props.key)} */
    render() {

        var { comps } = this.state;

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
                            <input className="imgicon" type="image" src={setting} alt="" aria-label="" />
                            <input className="imgicon" type="image" src={deletes} onClick={() => this.props.onClickRemove()} alt="" aria-label="" />
                        </div>
                    </div>

                </div><hr className="border" />
                <div className="panel">
                    <div className="question">
                        <textarea className="border fontsize-input" id="question_enter" cols="30" rows="10" placeholder="Enter question content"></textarea>
                        <table>
                            <tbody id="">

                                {comps.map((comp, index) => {
                                    return <InputRadio key={index} selectedClass={this.state.comps[index].selectedClass} onClickCorrect={() => this.handleClick(index)} onClickDelete={() => this.removeTimeItem(index)} />
                                })}
                                <tr className="addfooter fontsize-input"><td><label htmlFor={this.props.id + "-addsection-btn"}>

                                    <input className="imgicon add input-add" id={this.props.id + "-addsection-btn"} type="image" src={add} onClick={
                                        () => this.setState({ comps: comps.concat(t) })
                                    } alt="" aria-label="" /> <span style={{ position: "absolute" }}>Add choice</span></label>
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