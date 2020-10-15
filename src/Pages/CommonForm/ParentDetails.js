import React, { Component } from 'react'
import '../../CSS/Pages/Schools/CommonForm.css'

export class ParentDetails extends Component {

    state = {
        alumni: false
    }

    render() {
        return (
            <div>
                <form onSubmit={() => { this.props.change(2) }} >
                    <h3 >Particulars of Parents</h3>

                    <label>Full Name</label>
                    <input className="standard-input" name="student-name" style={{ width: "100%" }} placeholder="Father" ></input>
                    <input className="standard-input" name="student-name" style={{ width: "100%" }} placeholder="Mother" ></input>

                    <label>Qualifications</label>
                    <input className="standard-input" name="student-name" style={{ width: "100%" }} placeholder="Father" ></input>
                    <input className="standard-input" name="student-name" style={{ width: "100%" }} placeholder="Mother" ></input>

                    <label>Occupation</label>
                    <input className="standard-input" name="student-name" style={{ width: "100%" }} placeholder="Father" ></input>
                    <input className="standard-input" name="student-name" style={{ width: "100%" }} placeholder="Mother" ></input>

                    <div>
                        <label>Mobile Number</label>
                    </div>
                    <input className="standard-input" name="student-name" style={{ width: "50%" }} placeholder="Father" ></input>
                    <input className="standard-input" name="student-name" style={{ width: "50%" }} placeholder="Mother" ></input>

                    <h3 style={{ width: "100%" }} >Alumni Details </h3>
                    <div style={{margin:"20px 0px"}} >
                        <div>
                            <label><b>Parent Is Alumini In Any Of The Selected Schools</b></label>
                        </div>
                        <div className="wrap" style={{ justifyContent: "flex-start" }} >
                            <div>
                                <input type="radio" onChange={(e) => { this.setState({ alumni: e.target.value }) }} id="male" name="treatment" value="alumni-yes" />
                                <label for="male">Yes</label>
                            </div>
                            <div>
                                <input type="radio" id="female" onChange={(e) => { this.setState({ alumni: e.target.value }) }} name="treatment" value="alumni-no" />
                                <label for="female">No</label>
                            </div>
                        </div>
                    </div>

                    {
                        this.state.alumni === "alumni-yes" ? (
                            <div>
                                <div>
                                    <div>
                                        <label>
                                            Batch
                                        </label>
                                    </div>
                                    <input className="standard-input" style={{ width: "100%" }} placeholder="Batch" ></input>
                                </div>
                            </div>
                        ) : (
                                <div></div>
                            )
                    }

                    <input type="submit" value="SAVE" className="standard-button" style={{ backgroundColor: "#2196f3" }} ></input>
                </form>
            </div>
        )
    }
}

export default ParentDetails
