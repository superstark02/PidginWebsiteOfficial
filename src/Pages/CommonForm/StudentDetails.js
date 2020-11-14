import React, { Component } from 'react'
import '../../CSS/Pages/Schools/CommonForm.css'
import axios from "axios";
import getFormData from '../../Database/getFormData'

export class StudentDetails extends Component {

    state = {
        sibling: false,
        transport: false,
        name:"Name",
        form_data: "",
    }

    submitHandler = () => {
        var pro_url = "https://us-central1-pidgin-ds.cloudfunctions.net";
        var dev_url = "http://localhost:5000/form/dummy";
        axios.post(dev_url).then(result=>{
            console.log(result);
        }).catch(error=>{
            console.log(error)
        })
    }

    handleChecked = (data) => {
        if(data==="yes"){
            return true;
        }
        else{
            return false
        }
    }

    handleNotChecked = (data) => {
        if(data==="no"){
            return true;
        }
        else{
            return false
        }
    }

    handleCategory = (name,data) => {
        if(data===name){
            return true;
        }
        else{
            return false
        }
    }

    constructor(){
        super();
        getFormData("uid", "Name").then(result=>{
            this.setState({form_data:result});
        })
    }

    render() {
        return (
            <div>
                <div>
                    <form method="POST" onSubmit={this.submitHandler} >
                        <input type="hidden" name="uid" value={"uid"} defaultValue="uid" />
                        <h3>Particulars of Child</h3>
                        <input className="standard-input" name="name" style={{ width: "100%" }} placeholder="Name Of the Student" value={this.state.form_data.name} ></input>

                        <div className="wrap" style={{ justifyContent: "space-evenly", flexWrap: "wrap" }} >
                            <div style={{ width: "33%" }} >
                                <div>
                                    <label style={{ fontSize: "13px" }} >
                                        Class Appplying For:
                                    </label>
                                </div>
                                <div>
                                    <select className="standard-input" style={{ width: "80%" }} defaultValue={this.state.form_data.class} name="class">
                                        <option selected value="Nursery">Nursery</option>
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
                                    <select className="standard-input" style={{ width: "80%" }} name="gender" defaultValue={this.state.form_data.gender} >
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
                                    <input type="date" className="standard-input" name="dob" style={{ width: "80%" }} placeholder="DOB" defaultValue={this.state.form_data.dob} ></input>
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
                                    <input className="standard-input" name="age" style={{ width: "80%" }} placeholder="Age" defaultValue={this.state.form_data.age} ></input>
                                </div>
                            </div>

                            <div style={{ width: "33%" }} >
                                <div>
                                    <label>
                                        Nationality
                                    </label>
                                </div>
                                <div>
                                    <input name="nationality" className="standard-input" style={{ width: "80%" }} placeholder="Nationality" defaultValue={this.state.form_data.nationality} ></input>
                                </div>
                            </div>

                            <div style={{ width: "33%" }} >
                                <div>
                                    <label>
                                        Religion
                                    </label>
                                </div>
                                <div>
                                    <input name="religion" className="standard-input" style={{ width: "80%" }} placeholder="Religion" defaultValue={this.state.form_data.religion} ></input>
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
                                <input className="standard-input" name="adress" style={{ width: "100%" }} placeholder="Flat, House no, Building, Apartment" defaultValue={this.state.form_data.adress} ></input>
                            </div>
                            <div>
                                <input className="standard-input" name="adress2" style={{ width: "100%" }} placeholder="Area, Colony, Street, Sector, Village" defaultValue={this.state.form_data.adress2} ></input>
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
                                    <input className="standard-input" name="city" style={{ width: "100%" }} placeholder="City" defaultValue={this.state.form_data.city} ></input>
                                </div>
                            </div>

                            <div style={{ width: "23%" }} >
                                <div>
                                    <label>
                                        State
                                    </label>
                                </div>
                                <div>
                                    <input className="standard-input" name="state" style={{ width: "100%" }} placeholder="State" defaultValue={this.state.form_data.state} ></input>
                                </div>
                            </div>

                            <div style={{ width: "23%" }} >
                                <div>
                                    <label>
                                        Pin-Code
                                    </label>
                                </div>
                                <div>
                                    <input className="standard-input" name="pinCode" style={{ width: "100%" }} placeholder="Pincode" defaultValue={this.state.form_data.pinCode} ></input>
                                </div>
                            </div>

                            <div style={{ width: "23%" }} >
                                <div>
                                    <label>
                                        Country
                                    </label>
                                </div>
                                <div>
                                    <input className="standard-input" name="country" style={{ width: "100%" }} placeholder="Country" defaultValue={this.state.form_data.country} ></input>
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
                                    <input className="standard-input" name="phoneNumber" style={{ width: "100%" }} placeholder="Phone Number" defaultValue={this.state.form_data.phoneNumber} ></input>
                                </div>
                            </div>

                            <div style={{ width: "33%" }} >
                                <div>
                                    <label>
                                        Email
                                    </label>
                                </div>
                                <div>
                                    <input type="email" className="standard-input" name="email" style={{ width: "100%" }} placeholder="Email" defaultValue={this.state.form_data.email} ></input>
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
                                        <input type="radio" name="staffChild" value="yes" defaultChecked={this.state.form_data.staffChild} />
                                        <label for="staffChild">Yes</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="staffChild" value={null} defaultChecked={!this.state.form_data.staffChild} />
                                        <label for="staffChild">No</label>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <label><b>Child of Single Parent</b></label>
                                </div>
                                <div className="wrap" style={{ justifyContent: "flex-start" }} >
                                    <div>
                                        <input type="radio" name="singleParent" value="yes" defaultChecked={this.state.form_data.singleParent} />
                                        <label for="male">Yes</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="singleParent" value={null} defaultChecked={!this.state.form_data.singleParent} />
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
                                        <input type="radio" name="orphan" value="yes" defaultChecked={this.state.form_data.orphan} />
                                        <label for="male">Yes</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="orphan" value={null} defaultChecked={!this.state.form_data.orphan} />
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
                                        <input type="radio" name="category" value="General" defaultChecked={()=>{this.handleCategory("General",this.state.form_data.category)}} />
                                        <label for="category">General</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="category" value="category-sc" defaultChecked={()=>{this.handleCategory("category-sc", this.state.form_data.category)}} />
                                        <label for="category-sc">SC</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="category" value="category-st" defaultChecked={()=>{this.handleCategory("category-st", this.state.form_data.category)}} />
                                        <label for="category-st">ST</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="category" value="category-obc" defaultChecked={()=>{this.handleCategory("category-obc", this.state.form_data.category)}} />
                                        <label for="category-obc">OBC</label>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <label><b>Student Undergoing Any Treatment</b></label>
                                </div>
                                <div className="wrap" style={{ justifyContent: "flex-start" }} >
                                    <div>
                                        <input type="radio" name="treatment" value="yes" defaultChecked={this.state.form_data.treatment} />
                                        <label for="yes">Yes</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="treatment" value={null} defaultChecked={!this.state.form_data.treatment} />
                                        <label for="no">No</label>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <label><b>School Transport Required</b></label>
                                </div>
                                <div className="wrap" style={{ justifyContent: "flex-start" }} >
                                    <div>
                                        <input type="radio" onChange={(e)=>{this.setState({transport:e.target.value})}} name="schoolTransport" value="yes" defaultChecked={this.state.form_data.schoolTransport} />
                                        <label for="yes">Yes</label>
                                    </div>
                                    <div>
                                        <input type="radio" id="female" onChange={(e)=>{this.setState({transport:e.target.value})}} name="schoolTransport" value={null} defaultChecked={!this.state.form_data.schoolTransport} />
                                        <label for="no">No</label>
                                    </div>
                                </div>
                            </div>

                        </div>


                        {
                            this.state.transport === "yes" ? (
                                <div>
                                    <div style={{ width: "23%" }} >
                                        <div>
                                            <label>
                                                Distance From School (Km)
                                            </label>
                                        </div>
                                        <div>
                                            <input className="standard-input" type="number" name="distanceFromSchool" style={{ width: "100%" }} defaultValue={this.state.form_data.distanceFromSchool} placeholder="Distance From School" ></input>
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
                                    <input type="radio" onChange={(e) => { this.setState({ sibling: e.target.value })}} name="sibling" value="yes" defaultChecked={()=>{this.handleChecked(this.state.form_data.sibling)}} />
                                    <label for="yes">Yes</label>
                                </div>
                                <div>
                                    <input type="radio" id="female" onChange={(e) => { this.setState({ sibling: e.target.value })}} name="sibling" value="no" defaultChecked={()=>{this.handleNotChecked(this.state.form_data.sibling)}} />
                                    <label for="no">No</label>
                                </div>
                            </div>
                        </div>

                        {
                            this.state.sibling === "yes" ? (
                                <div>
                                    <div>
                                        <div>
                                            <label>
                                                Sibbling Name
                                            </label>
                                        </div>
                                        <input className="standard-input" style={{ width: "100%" }} placeholder="Sibling Name" name="siblingName" defaultValue={this.state.form_data.siblingName} ></input>
                                    </div>
                                    <div className="wrap" style={{ justifyContent: "flex-start", flexWrap: "wrap" }} >

                                        <div style={{ width: "47%", marginRight: "10px" }} >
                                            <div>
                                                <label>
                                                    Admission No.
                                                </label>
                                            </div>
                                            <div>
                                                <input className="standard-input" style={{ width: "100%" }} placeholder="Admission No." name="admissionNumer" defaultValue={this.state.form_data.admissionNumer} ></input>
                                            </div>
                                        </div>

                                        <div style={{ width: "47%" }} >
                                            <div>
                                                <label>
                                                    Class/Section
                                                </label>
                                            </div>
                                            <div>
                                                <input className="standard-input" style={{ width: "100%" }} placeholder="Class/Section" name="classSectionSibling" defaultValue={this.state.form_data.classSectionSibling} ></input>
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
