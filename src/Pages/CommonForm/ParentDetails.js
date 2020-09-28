import React, { Component } from 'react'
import '../../CSS/Pages/Schools/CommonForm.css'

export class ParentDetails extends Component {
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

                    <input type="submit" value="NEXT" className="standard-button" style={{ backgroundColor: "#2196f3" }} ></input>
                </form>
            </div>
        )
    }
}

export default ParentDetails
