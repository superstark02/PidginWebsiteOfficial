import React from 'react'
import firebase,{ db} from '../firebase'
import './class.css'
import MappBar from './mAppBar'
import Footer from './Footer'
import Dialog from '@material-ui/core/Dialog';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LanguageIcon from '@material-ui/icons/Language';
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';
import PersonOutlineRoundedIcon from '@material-ui/icons/PersonOutlineRounded';
import PeopleOutlineRoundedIcon from '@material-ui/icons/PeopleOutlineRounded';

import MyCart from '../Log/cart'
import { connect } from 'react-redux'
import { addBasket } from '../actions/add-action.js'
import { FaFemale } from 'react-icons/fa'
import ClassCarousel from './carousel'
import MobileClass from './mClass'

var tick = null

class ClassDisplay extends React.Component {
    state = {
        id: null,
        name: null,
        address: null,
        type: null,
        age: null,
        images: null,
        eligibility: null,
        courses: null,
        faculty: null,
        note: null,
        cart_dialog: false,

        time: null,
        online: null,
        individual: null,
        group: null,
        women: null,

        item_mode: "Offline",
        item_type: "Group",

        cart: [],
        cart_item: null,

        user:true,
    }

    componentDidMount() {
        var id = this.props.match.params.id

        if(firebase.auth().currentUser){
            this.setState({user:firebase.auth().currentUser})
        }

        const data = db.collection("Classes").doc(id)
        data.get().then(snapshot => {
            var name
            var address
            var type
            var age
            var time
            var online
            var individual
            var group
            var women

            name = snapshot.get('name')
            address = snapshot.get('address')
            type = snapshot.get('type')
            age = snapshot.get('age')

            time = snapshot.get('time')
            online = snapshot.get('online')
            individual = snapshot.get('individual')
            group = snapshot.get('group')
            women = snapshot.get('women')

            this.setState({ name: name })
            this.setState({ address: address })
            this.setState({ type: type })
            this.setState({ age: age })

            this.setState({ time: time })
            this.setState({ online: online })
            this.setState({ individual: individual })
            this.setState({ group: group })
            this.setState({ women: women })
        })

        const elegibility = db.collection("Classes").doc(id).collection("Eligibility")
        elegibility.get().then(snapshot => {
            const item = []
            snapshot.forEach(doc => {
                const data = doc.data()
                item.push(data)
            })
            this.setState({ eligibility: item })
        })

        const courses = db.collection("Classes").doc(id).collection("Courses")
        courses.get().then(snapshot => {
            const item = []
            snapshot.forEach(doc => {
                const data = doc.data()
                item.push(data)
            })
            this.setState({ courses: item })
        })

        const faculty = db.collection("Classes").doc(id).collection("Qualifications")
        faculty.get().then(snapshot => {
            const item = []
            snapshot.forEach(doc => {
                const data = doc.data()
                item.push(data)
            })
            this.setState({ faculty: item })
        })

        const note = db.collection("Classes").doc(id).collection("Note")
        note.get().then(snapshot => {
            const item = []
            snapshot.forEach(doc => {
                const data = doc.data()
                item.push(data)
            })
            this.setState({ note: item })
        })

        this.setState({id:id})

    }

    handleClose = () => {
        this.setState({ cart_dialog: false })
    }

    openCart = (item) => {
        this.setState({ cart_dialog: true })
        this.setState({ cart_item: item })
    }

    handleMode = () => {
        if (this.state.item_mode === "Online") {
            this.setState({ item_mode: "Offline" })
        }
        else {
            this.setState({ item_mode: "Online" })
        }
    }

    handleType = () => {
        if (this.state.item_type === "Group") {
            this.setState({ item_type: "Individual" })
        }
        else {
            this.setState({ item_type: "Group" })
        }
    }

    addToCart = (item) => {
        this.props.addBasket(item,item.price)
        this.handleClose()
    }

    remove = (items, item) => {
        var index = items.indexOf(item)
        if (index > -1) {
            items.splice(index, 1)
        }
    }

    render() {
        tick = <div style={{ position: "absolute", bottom: "0", color: "#00d882", margin: "0px 5px" }} >
            <CheckCircleIcon color="#00d882" />
        </div>
        return (
            <div style={{ backgroundColor: "white",paddingTop: "80px", }} >
                <ClassCarousel id={this.props.match.params.id}/>
                <div className="desktop" >
                    <div className="wrap" style={{ margin: "100px 0px" }} >
                        <div className="class-container" >
                            <div style={{ width: '600px' }} >
                                <h1>{this.state.name}</h1>
                                <div className="address" >
                                    {this.state.address}
                                </div>
                                <div style={{ display: 'flex' }} >
                                    <div className="type1" >{this.state.type}</div>
                                    <div className="type1" >Age: {this.state.age}+</div>
                                </div>

                                <div>
                                    <h2>Features</h2>
                                    <div className="wrap" >
                                        <div style={{ display: 'flex', width: "100%", flexWrap: "wrap" }} >

                                            {this.state.time ? (
                                                <div className="class-feature" ><AccessTimeRoundedIcon/>{this.state.time}</div>
                                            ) : (
                                                    <div></div>
                                                )}

                                            {this.state.individual ? (
                                                <div className="class-feature" ><PersonOutlineRoundedIcon/>Individual Classes Available</div>
                                            ) : (
                                                    <div></div>
                                                )}

                                            {this.state.online ? (
                                                <div className="class-feature" ><LanguageIcon/>Online Classes Available</div>
                                            ) : (
                                                    <div></div>
                                                )}

                                            {this.state.group ? (
                                                <div className="class-feature" ><PeopleOutlineRoundedIcon/>Group Classes Available</div>
                                            ) : (
                                                    <div></div>
                                                )}

                                            {this.state.women ? (
                                                <div className="class-feature" ><FaFemale/>Women</div>
                                            ) : (
                                                    <div></div>
                                                )}

                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h2>Eligibility</h2>
                                    <ul style={{ listStyle: "none" }} >
                                        {
                                            this.state.eligibility &&
                                            this.state.eligibility.map(item => {
                                                return (
                                                    <li>{item.item}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>

                                <div>
                                    <h2>Courses</h2>
                                    <div style={{ width: "600px", display: 'flex', flexWrap: "wrap" }} >
                                        {
                                            this.state.courses &&
                                            this.state.courses.map(item => {
                                                return (
                                                    <div className="class-card-wrap" >
                                                        <div className="class-card">
                                                            <div style={{ width: "100px", height: "150px", overflow: "hidden" }} >
                                                                <img src={item.image} alt="s" width="100px" />
                                                            </div>

                                                            <div style={{ width: "180px", paddingLeft: "10px", maxHeight: "150px", display: "flex", flexDirection: "column", justifyContent: "space-between" }} >
                                                                <div>{item.title}</div>
                                                                <div style={{ fontSize: "10px", color: "grey" }} >
                                                                    Click for more details
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div style={{ height: "50px", width: "100%", padding: "10px", display: "flex", justifyContent: "space-between", alignContent: "center", border: "1px solid #cacaca" }}>
                                                            <div style={{ padding: "5px" }} >
                                                                Fees : &#8377;{item.price}
                                                            </div>

                                                            <div className="class-button" onClick={() => { this.openCart(item) }} >
                                                                + ADD
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                                <div>
                                    <h2>About Faculty</h2>
                                    <ul style={{ listStyle: "none" }} >
                                        {
                                            this.state.faculty &&
                                            this.state.faculty.map(item => {
                                                return (
                                                    <li style={{ marginBottom: "15px" }} >{item.item}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>

                                <div>
                                    <h2>Note From Teacher</h2>
                                    <ul style={{ listStyle: "none" }} >
                                        {
                                            this.state.note &&
                                            this.state.note.map(item => {
                                                return (
                                                    <li style={{ marginBottom: "15px" }} >{item.item}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>

                            </div>

                            <div style={{ width: '400px', alignItems: "start" }} className="wrap" >
                                <MyCart/>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mobile" style={{minHeight:"100vh"}} >
                    <MappBar />
                    <MobileClass 
                        id={this.props.match.params.id}
                        images={this.state.images}
                        eligibility={this.state.eligibility}
                        courses={this.state.courses}
                        qualifications={this.state.faculty}
                        note={this.state.note}

                        name={this.state.name}
                        address={this.state.address}
                        type={this.state.type}
                        age={this.state.age}
                     />
                </div>
                <Footer />

                <Dialog open={this.state.cart_dialog} onClose={this.handleClose} >
                    <div className="dialog" >
                        <div>
                            <p className="cart-heading" >Select the mode:</p>
                            <ToggleButtonGroup
                                style={{ display: "flex", justifyContent: "space-evenly", margin: "10px 0px" }}
                                exclusive
                                value={this.state.item_mode}
                                onChange={this.handleMode}
                            >
                                <ToggleButton style={{ padding: "0px" }} value="Online" >
                                    <div className="toggle-button online">
                                        <div className="button-overlay wrap" >
                                            Online <br />Classes
                                        </div>
                                        {this.state.item_mode === "Online" ? (
                                            tick
                                        ) : (<div></div>)}
                                    </div>
                                </ToggleButton>

                                <ToggleButton style={{ padding: "0px" }} value="Offline" >
                                    <div className="toggle-button offline" >
                                        <div className="button-overlay wrap" >
                                            Offline <br />Classes
                                        </div>
                                        {this.state.item_mode === "Offline" ? (
                                            tick
                                        ) : (<div></div>)}
                                    </div>
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                        <div>
                            <p className="cart-heading" >Want to learn with group or solo:</p>
                            <ToggleButtonGroup
                                exclusive
                                value={this.state.item_type}
                                onChange={this.handleType}
                                style={{ display: "flex", justifyContent: "space-evenly", margin: "10px 0px" }} >
                                <ToggleButton style={{ padding: "0px" }} value="Group" >
                                    <div className="toggle-button group">
                                        <div className="button-overlay wrap" >
                                            Group <br />Classes
                                        </div>
                                        {this.state.item_type === "Group" ? (
                                            tick
                                        ) : (<div></div>)}
                                    </div>
                                </ToggleButton>

                                <ToggleButton style={{ padding: "0px" }} value="Individual" >
                                    <div className="toggle-button individual" >
                                        <div className="button-overlay wrap" >
                                            Individual <br />Classes
                                        </div>
                                        {this.state.item_type === "Individual" ? (
                                            tick
                                        ) : (<div></div>)}
                                    </div>
                                </ToggleButton>

                            </ToggleButtonGroup>
                        </div>

                        <div style={{ width: "100%", height: "150px", textAlign: "center" }} >
                            Chose Dates
                        </div>

                        <div className="class-button" onClick={()=>this.addToCart(this.state.cart_item)} style={{ textAlign: "center", padding: "20px", borderTop: "1px solid #00d882" }} >
                            ADD TO CART
                        </div>
                    </div>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    basketProps: state.basketState
})

export default connect(mapStateToProps, {addBasket} )(ClassDisplay);