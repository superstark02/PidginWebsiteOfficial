import React from 'react'
import { db } from '../firebase'
import MyAppBar from './AppBar'
import './class.css'
import MappBar from './mAppBar'
import Footer from './Footer'
import step from '../Images/steps.png'
import Dialog from '@material-ui/core/Dialog';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

var screen = null
var tick = null


function check (items,item){
    if(items.indexOf(item) > -1){
        return false
    }
    return true
}

export default class ClassDisplay extends React.Component {
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
        cart_dialog:false,

        item_mode:"Offline",
        item_type:"Group",

        cart:[],
        cart_item:null,
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
        images.get().then(snapshot => {
            const item = []
            snapshot.forEach(doc => {
                const data = doc.data()
                item.push(data)
            })
            this.setState({ images: item })
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

    }

    handleClose = () => {
        this.setState({cart_dialog:false})
    }

    openCart = (item) => {
        this.setState({cart_dialog:true})
        this.setState({cart_item:item})
    }

    handleMode = () => {
        if(this.state.item_mode==="Online"){
            this.setState({item_mode:"Offline"})
        }
        else{
            this.setState({item_mode:"Online"})
        }
    }

    handleType = () => {
        if(this.state.item_type==="Group"){
            this.setState({item_type:"Individual"})
        }
        else{
            this.setState({item_type:"Group"})
        }
    }

    addToCart = () => {
        if(check(this.state.cart,this.state.cart_item)){
            this.state.cart.push(this.state.cart_item)
            this.setState({cart_item:null})
        }
        this.handleClose()
    }

    remove = (items,item) => {
        var index = items.indexOf(item)
        if(index > -1){
            items.splice(index,1)
        }
    }

    render() {
        screen = <div className="sticky" >
                    <div className="grad" >
                        Book Now
                    </div>
                    <img src={step} width="350px" alt="s" />
                  </div>
        tick = <div style={{position:"absolute",bottom:"0",color:"#00d882",margin:"0px 5px"}} >
                    <CheckCircleIcon color="#00d882" />
                </div>

        if(this.state.cart.length!==0){
            screen = <div className="sticky" >
                        <div className="grad" >
                            Your Cart
                        </div>
                        <div style={{padding:"10px",border:"solid 1px grey",borderTop:"none",minHeight:"500px",borderRadius:"0px 0px 10px 10px",display:"flex",flexDirection:"column",justifyContent:"space-between"}} >
                            <div>
                            {   
                                this.state.cart&&
                                this.state.cart.map(item=>{
                                    return(
                                        <div className="cart-item" >
                                            <div>
                                                <img src={item.image} alt="s" width="100px" />
                                            </div>
                                            <div style={{width:"200px",marginLeft:"5px"}} >
                                                <div>
                                                    {item.title}
                                                </div>
                                                <div className="class-button" style={{width:"fit-content",color:"#f05f7f"}} onClick={()=>{this.remove(this.state.cart,item)}} >
                                                    - DELETE
                                                </div>
                                            </div>
                                            <div>
                                                &#8377;{item.price}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            </div>
                            <div>
                                <div style={{display:"flex",justifyContent:"space-between",padding:"10px"}} >
                                    <div>
                                        <b>Total</b>
                                    </div>
                                    <div>
                                        total price
                                    </div>
                                </div>
                                <div className="class-checkout-button" >
                                    CHECKOUT
                                </div>
                            </div>
                        </div>
                    </div>
        }

        return (
            <div>
                <div className="desktop" style={{ paddingTop: "80px" }} >
                    <MyAppBar />
                    <div className="carousel" >
                        {
                            this.state.images &&
                            this.state.images.map(item => {
                                return (
                                    <div><img alt="s" src={item.item} className="imageCarousel" /></div>
                                )
                            })
                        }
                    </div>
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

                                                            <div className="class-button" onClick={()=>{this.openCart(item)}} >
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
                                {screen}
                            </div>

                        </div>
                    </div>
                </div>
                <div className="mobile" >
                    <MappBar />
                </div>
                <Footer />
                
                <Dialog open={this.state.cart_dialog} onClose={this.handleClose} >
                    <div className="dialog" >
                        <div>
                            <p className="cart-heading" >Select the mode:</p>
                            <ToggleButtonGroup
                             style={{display:"flex",justifyContent:"space-evenly",margin:"10px 0px"}}
                             exclusive
                             value={this.state.item_mode}
                             onChange={this.handleMode}
                              >
                                <ToggleButton style={{padding:"0px"}} value="Online" >
                                    <div className="toggle-button online">
                                        <div className="button-overlay wrap" >
                                            Online <br/>Classes
                                        </div>
                                        {this.state.item_mode === "Online" ? (
                                            tick
                                        ):(<div></div>)}
                                    </div>
                                </ToggleButton>
                                
                                <ToggleButton style={{padding:"0px"}} value="Offline" >
                                    <div className="toggle-button offline" >
                                        <div className="button-overlay wrap" >
                                            Offline <br/>Classes
                                        </div>
                                        {this.state.item_mode === "Offline" ? (
                                            tick
                                        ):(<div></div>)}
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
                            style={{display:"flex",justifyContent:"space-evenly",margin:"10px 0px"}} >
                                <ToggleButton style={{padding:"0px"}} value="Group" >
                                    <div className="toggle-button group">
                                        <div className="button-overlay wrap" >
                                            Group <br/>Classes
                                        </div>
                                        {this.state.item_type === "Group" ? (
                                            tick
                                        ):(<div></div>)}
                                    </div>
                                </ToggleButton>

                                <ToggleButton style={{padding:"0px"}} value="Individual" >
                                    <div className="toggle-button individual" >
                                        <div className="button-overlay wrap" >
                                            Individual <br/>Classes
                                        </div>
                                        {this.state.item_type === "Individual" ? (
                                            tick
                                        ):(<div></div>)}
                                    </div>
                                </ToggleButton>

                            </ToggleButtonGroup>
                        </div>

                        <div style={{width:"100%",height:"150px",textAlign:"center"}} >
                            Chose Dates
                        </div>

                        <div className="class-button" onClick={this.addToCart} style={{textAlign:"center",padding:"20px",borderTop:"1px solid #00d882"}} >
                            ADD TO CART
                        </div>
                    </div>
                </Dialog>
            </div>
        )
    }
}