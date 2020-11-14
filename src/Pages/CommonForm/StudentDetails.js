import React, { Component } from 'react'
import '../../CSS/Pages/Schools/CommonForm.css'
import axios from "axios";

export class StudentDetails extends Component {

    state = {
        sibling: false,
        transport: false,
        name:"Name"
    }

    submitHandler = () => {
        axios.post("https://us-central1-pidgin-ds.cloudfunctions.net").then(result=>{
            console.log(result);
        }).catch(error=>{
            console.log(error)
        })
    }

    constructor(){
        super();


    }

    render() {
        return (
            <div>
                <div>
                    <form method="POST" onSubmit={this.submitHandler} >
                        <h3>Particulars of Child</h3>
                        <input className="standard-input" name="name" style={{ width: "100%" }} placeholder="Name Of the Student" ></input>

                        <div className="wrap" style={{ justifyContent: "space-evenly", flexWrap: "wrap" }} >
                            <div style={{ width: "33%" }} >
                                <div>
                                    <label style={{ fontSize: "13px" }} >
                                        Class Appplying For:
                                    </label>
                                </div>
                                <div>
                                    <select className="standard-input" id="cars" style={{ width: "80%" }} name="cars">
                                        <option value="Nursery">Nursery</option>
                                        <option value="Pre-Primary">Primary</option>
                                        <option value="1st">1st</option>
                                    </select>
                                </div>
                            </div>

                            <div style={{ width: "33%" }} >
                                <div>
                                    <label>
                                        Gender
                                    </label>
                                </div>
                                <div>
                                    <select className="standard-input" style={{ width: "80%" }} id="cars" name="cars">
                                        <option value="volvo">Male</option>
                                        <option value="saab">Female</option>
                                        <option value="fiat">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div style={{ width: "33%" }} >
                                <div>
                                    <label>
                                        Date Of Birth
                                    </label>
                                </div>
                                <div>
                                    <input type="date" className="standard-input" style={{ width: "80%" }} placeholder="DOB" ></input>
                                </div>
                            </div>
                        </div>

                        <div className="wrap" style={{ justifyContent: "space-evenly", flexWrap: "wrap" }} >
                            <div style={{ width: "33%" }} >
                                <div>
                                    <label>
                                        Age
                                    </label>
                                </div>
                                <div>
                                    <input className="standard-input" style={{ width: "80%" }} placeholder="Age" ></input>
                                </div>
                            </div>

                            <div style={{ width: "33%" }} >
                                <div>
                                    <label>
                                        Nationality
                                    </label>
                                </div>
                                <div>
                                    <input className="standard-input" style={{ width: "80%" }} placeholder="Age" ></input>
                                </div>
                            </div>

                            <div style={{ width: "33%" }} >
                                <div>
                                    <label>
                                        Religion
                                    </label>
                                </div>
                                <div>
                                    <input className="standard-input" style={{ width: "80%" }} placeholder="Age" ></input>
                                </div>
                            </div>
                        </div>


                        <h3>Particulars of Residence</h3>
                        <div style={{ width: "100%" }} >
                            <div>
                                <label>
                                    Residential Address
                                    </label>
                            </div>
                            <div>
                                <input className="standard-input" name="student-name" style={{ width: "100%" }} placeholder="Flat, House no, Building, Apartment" ></input>
                            </div>
                            <div>
                                <input className="standard-input" name="student-name" style={{ width: "100%" }} placeholder="Area, Colony, Street, Sector, Village" ></input>
                            </div>
                        </div>
                        <div className="wrap" style={{ justifyContent: "space-evenly", flexWrap: "wrap" }} >

                            <div style={{ width: "23%" }} >
                                <div>
                                    <label>
                                        City
                                    </label>
                                </div>
                                <div>
                                    <input type="email" className="standard-input" name="student-email" style={{ width: "100%" }} placeholder="City" ></input>
                                </div>
                            </div>

                            <div style={{ width: "23%" }} >
                                <div>
                                    <label>
                                        State
                                    </label>
                                </div>
                                <div>
                                    <input className="standard-input" name="student-name" style={{ width: "100%" }} placeholder="State" ></input>
                                </div>
                            </div>

                            <div style={{ width: "23%" }} >
                                <div>
                                    <label>
                                        Pin-Code
                                    </label>
                                </div>
                                <div>
                                    <input className="standard-input" name="student-name" style={{ width: "100%" }} placeholder="Pincode" ></input>
                                </div>
                            </div>

                            <div style={{ width: "23%" }} >
                                <div>
                                    <label>
                                        Country
                                    </label>
                                </div>
                                <div>
                                    <input className="standard-input" name="student-name" style={{ width: "100%" }} placeholder="Country" ></input>
                                </div>
                            </div>
                        </div>

                        <div className="wrap" style={{ justifyContent: "flex-start", flexWrap: "wrap" }} >

                            <div style={{ width: "33%", marginRight: "10px" }} >
                                <div>
                                    <label>
                                        Phone Number
                                    </label>
                                </div>
                                <div>
                                    <input type="email" className="standard-input" name="student-email" style={{ width: "100%" }} placeholder="Phone Number" ></input>
                                </div>
                            </div>

                            <div style={{ width: "33%" }} >
                                <div>
                                    <label>
                                        Email
                                    </label>
                                </div>
                                <div>
                                    <input className="standard-input" name="student-name" style={{ width: "100%" }} placeholder="Email" ></input>
                                </div>
                            </div>
                        </div>

                        <h3>Other Details</h3>
                        <div className="wrap" style={{ justifyContent: "space-between", flexWrap: "wrap" }} >
                            <div>
                                <div>
                                    <label><b>Ward of School Staff</b></label>
                                </div>
                                <div className="wrap" style={{ justifyContent: "flex-start" }} >
                                    <div>
                                        <input type="radio" id="male" name="gender" value="male" />
                                        <label for="male">Yes</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="female" name="gender" value="female" />
                                        <label for="female">No</label>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <label><b>Child of Single Parent</b></label>
                                </div>
                                <div className="wrap" style={{ justifyContent: "flex-start" }} >
                                    <div>
                                        <input type="radio" id="male" name="staff" value="yes-staff" />
                                        <label for="male">Yes</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="female" name="staff" value="no-staff" />
                                        <label for="female">No</label>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <label><b>Is Orphan</b></label>
                                </div>
                                <div className="wrap" style={{ justifyContent: "flex-start" }} >
                                    <div>
                                        <input type="radio" id="male" name="orphan" value="orphan-yes" />
                                        <label for="male">Yes</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="female" name="orphan" value="orphan-no" />
                                        <label for="female">No</label>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <label><b>Category</b></label>
                                </div>
                                <div className="wrap" style={{ justifyContent: "flex-start" }} >
                                    <div>
                                        <input type="radio" id="male" name="category" value="category-general" />
                                        <label for="male">General</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="female" name="category" value="category-sc" />
                                        <label for="female">SC</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="female" name="category" value="category-st" />
                                        <label for="female">ST</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="female" name="category" value="category-obc" />
                                        <label for="female">OBC</label>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <label><b>Student Undergoing Any Treatment</b></label>
                                </div>
                                <div className="wrap" style={{ justifyContent: "flex-start" }} >
                                    <div>
                                        <input type="radio" id="male" name="treatment" value="treatment-yes" />
                                        <label for="male">Yes</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="female" name="treatment" value="treatment-no" />
                                        <label for="female">No</label>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <label><b>School Transport Required</b></label>
                                </div>
                                <div className="wrap" style={{ justifyContent: "flex-start" }} >
                                    <div>
                                        <input type="radio" id="male" onChange={(e)=>{this.setState({transport:e.target.value})}} name="school-transport" value="transport-yes" />
                                        <label for="male">Yes</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="female" onChange={(e)=>{this.setState({transport:e.target.value})}} name="school-transport" value="transport-no" />
                                        <label for="female">No</label>
                                    </div>
                                </div>
                            </div>

                        </div>


                        {
                            this.state.transport === "transport-yes" ? (
                                <div>
                                    <div style={{ width: "23%" }} >
                                        <div>
                                            <label>
                                                Distance From School (Km)
                                            </label>
                                        </div>
                                        <div>
                                            <input className="standard-input" name="student-name" style={{ width: "100%" }} placeholder="Distance From School" ></input>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div>

                                </div>
                            )
                        }

                        <h3 style={{ width: "100%" }} >Sibling Details</h3>
                        <div style={{ margin: "20px 0px" }} >
                            <div>
                                <label><b>Sibling Present In Any Of The Selected Schools</b></label>
                            </div>
                            <div className="wrap" style={{ justifyContent: "flex-start" }} >
                                <div>
                                    <input type="radio" onChange={(e) => { this.setState({ sibling: e.target.value }); console.log(this.state.sibling) }} id="male" name="treatment" value="sibling-yes" />
                                    <label for="male">Yes</label>
                                </div>
                                <div>
                                    <input type="radio" id="female" onChange={(e) => { this.setState({ sibling: e.target.value }); console.log(this.state.sibling) }} name="treatment" value="sibling-no" />
                                    <label for="female">No</label>
                                </div>
                            </div>
                        </div>

                        {
                            this.state.sibling === "sibling-yes" ? (
                                <div>
                                    <div>
                                        <div>
                                            <label>
                                                Sibbling Name
                                            </label>
                                        </div>
                                        <input className="standard-input" style={{ width: "100%" }} placeholder="Sibling Name" ></input>
                                    </div>
                                    <div className="wrap" style={{ justifyContent: "flex-start", flexWrap: "wrap" }} >

                                        <div style={{ width: "47%", marginRight: "10px" }} >
                                            <div>
                                                <label>
                                                    Admission No.
                                                </label>
                                            </div>
                                            <div>
                                                <input className="standard-input" style={{ width: "100%" }} placeholder="Admission No." ></input>
                                            </div>
                                        </div>

                                        <div style={{ width: "47%" }} >
                                            <div>
                                                <label>
                                                    Class/Section
                                                </label>
                                            </div>
                                            <div>
                                                <input className="standard-input" style={{ width: "100%" }} placeholder="Class/Section" ></input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                    <div></div>
                                )
                        }

                        <div>
                            <input type="submit" value="SAVE" className="standard-button" style={{ backgroundColor: "#2196f3" }} ></input>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default StudentDetails
