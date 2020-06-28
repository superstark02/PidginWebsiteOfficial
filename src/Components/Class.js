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
        images:null,
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

        const images = db.collection("Classes").doc(id).collection("Images")
        images.get().then(snapshot=>{
            const item = []
            snapshot.forEach(doc=>{
                const data = doc.data()
                item.push(data)
            })
            this.setState({images:item})
        })

    }

    render() {
        return (
            <div>
                <div className="desktop" >
                    <div className="overlay" >
                        <div class="appBar">
                            <div>
                                <img alt="logo" style={{ marginLeft: "50px", marginTop: "10px" }} src={logo} width="70px" />
                            </div>
                        </div>

                        <div style={{ width: "1200px", marginTop: '100px'}} >
                            <div style={{ display: 'flex' }} >
                                <div style={{ width: '800px', height: '310px',display:'flex',overflowX:'scroll'}} >
                                    {
                                        this.state.images&&
                                        this.state.images.map(item=>{
                                            return(
                                                <img alt="s" src={item.item} style={{margin:'10px'}} height="300px"/>
                                            )
                                        })
                                    }
                                </div>
                                <div style={{ width: '400px', height: '330px', display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', padding: '20px' }} >
                                    <div className="cell" > Online </div>
                                    <div className="cell" > Online </div>
                                    <div className="cell" > Online </div>
                                    <div className="cell" > Online </div>
                                    <div className="cell" > Online </div>
                                    <div className="cell" > Online </div>
                                </div>
                            </div>
                            <h1>{this.state.name}</h1>
                            <p className="address" >
                                {this.state.address}
                            </p>
                            <div style={{ display: 'flex' }} >
                                <p className="type1" >
                                    {this.state.type}
                                </p>
                                <p className="type1" >
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
            </div>
        )
    }
}