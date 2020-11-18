import React, { Component } from 'react'
import '../../CSS/Pages/Schools/CommonForm.css'
import getUser from '../../Database/getUser';
import getFormData from '../../Database/getFormData'

export class ParentDetails extends Component {

    state = {
        alumni: false,
        form_data: "",
        uid: ""
    }

    constructor() {
        super();
        getUser().then(data => {
            if (data === -1) {
                
            }
            else if (data) {
                this.setState({ uid: data.uid })

                getFormData(data.uid, "student").then(result => {
                    this.setState({ form_data: result });
                })
            }
        })
    }

    render() {
        return (
            <div>

                {
                    this.state.uid === "" ? (
                        <h6 style={{ margin: "0px 0px", color: "#f50057" }} >
                            Please sign-in for saving and submitting the form.
                        </h6>
                    ) : (
                        <div></div>
                    )
                }
                <form method="POST" action="http://localhost:5000/student" >
                    <input type="hidden" name="uid" value={this.state.uid} defaultValue="uid" />
                    <input type="hidden" name="part" value="parents" />
                    <h3 >Particulars of Parents</h3>

                    <label>Full Name</label>
                    <input className="standard-input" name="fatherName" style={{ width: "100%" }} defaultValue={this.state.form_data.fatherName} placeholder="Father" ></input>
                    <input className="standard-input" name="motherName" style={{ width: "100%" }} defaultValue={this.state.form_data.motherName} placeholder="Mother" ></input>

                    <label>Qualifications</label>
                    <input className="standard-input" name="fatherQuaification" style={{ width: "100%" }} defaultValue={this.state.form_data.fatherQuaification} placeholder="Father" ></input>
                    <input className="standard-input" name="motherQuaification" style={{ width: "100%" }} defaultValue={this.state.form_data.motherQuaification} placeholder="Mother" ></input>

                    <label>Occupation</label>
                    <input className="standard-input" name="fatherOccupation" style={{ width: "100%" }} defaultValue={this.state.form_data.fatherOccupation} placeholder="Father" ></input>
                    <input className="standard-input" name="motherOccupation" style={{ width: "100%" }} defaultValue={this.state.form_data.motherOccupation} placeholder="Mother" ></input>

                    <div>
                        <label>Mobile Number</label>
                    </div>
                    <input className="standard-input" name="fatherPhone" style={{ width: "50%" }} defaultValue={this.state.form_data.fatherPhone} placeholder="Father" ></input>
                    <input className="standard-input" name="motherPhone" style={{ width: "50%" }} defaultValue={this.state.form_data.motherPhone} placeholder="Mother" ></input>

                    <h3 style={{ width: "100%" }} >Alumnus Details </h3>
                    <div style={{ margin: "20px 0px" }} >
                        <div>
                            <label><b>Parent Is Alumnus In Any Of The Selected Schools</b></label>
                        </div>
                        <div className="wrap" style={{ justifyContent: "flex-start" }} >
                            <div>
                                <input type="radio" onChange={(e) => { this.setState({ alumni: e.target.value }) }} defaultChecked={this.state.form_data.alumnus} name="alumnus" value="yes" />
                                <label for="alumnus">Yes</label>
                            </div>
                            <div>
                                <input type="radio" onChange={(e) => { this.setState({ alumni: e.target.value }) }} defaultChecked={!this.state.form_data.alumnus} name="alumnus" value={null} />
                                <label for="alumnus">No</label>
                            </div>
                        </div>
                    </div>

                    {
                        this.state.alumni === "yes" ? (
                            <div>
                                <div>
                                    <div>
                                        <label>
                                            Batch
                                        </label>
                                    </div>
                                    <input className="standard-input" name="batchParent" defaultValue={this.state.form_data.batchParent} style={{ width: "100%" }} placeholder="Batch" ></input>
                                </div>
                            </div>
                        ) : (
                                <div></div>
                            )
                    }

                    <div>
                        <input type="submit" value="SAVE" className="standard-button" style={{ backgroundColor: "#2196f3" }} ></input>
                        <button className="standard-button" style={{ backgroundColor: "#2196f3", marginLeft: "10px" }} onClick={() => { this.props.change(2) }} >NEXT</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ParentDetails
