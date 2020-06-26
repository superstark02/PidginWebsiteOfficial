import React from 'react'
import logo from '../Images/app_bg.png'
import { db } from '../firebase'
import './class.css'

export default class ClassDisplay extends React.Component {
    state = {
        id: null,
        name: null,
        address: null,
        type: null,
        age: null,
    }
    componentDidMount() {
        var id = this.props.match.params.id
        this.setState({ id: id })

        const data = db.collection("Classes").doc(id)
        data.get().then(snapshot => {
            var name
            var address
            var type
            var age

            name = snapshot.get('name')
            address = snapshot.get('address')
            type = snapshot.get('type')
            age = snapshot.get('age')

            this.setState({ name: name })
            this.setState({ address: address })
            this.setState({ type: type })
            this.setState({ age: age })
        })


    }
    render() {
        return (
            <React.Fragment>
                <div className="desktop" >
                    <div className="overlay" >
                        <div class="appBar">
                            <div>
                                <img alt="logo" style={{ marginLeft: "50px", marginTop: "10px" }} src={logo} width="70px" />
                            </div>
                        </div>

                        <div style={{ width: "1200px", marginTop: '100px' }} >
                            <div style={{display:'flex'}} >
                                <div style={{ width: '800px', height: '300px',backgroundColor:'grey' }} >

                                </div>
                                <div style={{width:'400px',height:'300px',display:'flex',justifyContent:'space-evenly',flexWrap:'wrap',padding:'20px'}} >
                                    <div className="cell" > Online </div>
                                    <div className="cell" > Online </div>
                                    <div className="cell" > Online </div>
                                    <div className="cell" > Online </div>
                                    <div className="cell" > Online </div>
                                    <div className="cell" > Online </div>
                                </div>
                            </div>
                            <h1>Name {this.state.name}</h1>
                            <p className="address" >
                                {this.state.address}
                            </p>
                            <div style={{ display: 'flex' }} >
                                <p className="type" >
                                    {this.state.type}
                                </p>
                                <p className="type" >
                                    Age: {this.state.age}+
                                </p>
                            </div>

                            <div>
                                <h2>Eligibilty</h2>
                            </div>

                            <div>
                                <h2>Courses</h2>
                            </div>

                            <div>
                                <h2>About Faculty</h2>
                            </div>

                            <div>
                                <h2>Note From Teacher</h2>
                            </div>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}