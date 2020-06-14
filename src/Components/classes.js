import React from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { db } from '../firebase'
import './classes.css'
import { FaChevronCircleRight } from 'react-icons/fa'
import Footer from './Footer'
import { Button } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

var name
export default class Classes extends React.Component {
    state = {
        name: null,
        images: null,
        eligibility: null,
        qualifications: null,
        note: null,
        courses: null,
        offers: null,
        branches: null,
        age: null,
        id: '',
        woman: false,
        online: false,
        address: '',
        type: '',
        location: "",

        courseId: '',
        courseName: '',
        courseImage: '',
        courseFees: '',
        docId: '',
        courseLength: '',

        showCart: false,
        loading: false,
        details:null,
    }

    handleOpen = (id,name,image) => {
        const data = db.collection("Classes").doc(this.state.id).collection("Courses").doc(id).collection("details")
        data.get().then(snapshot => {
            const details = []
            snapshot.forEach(doc => {
                const data = doc.data()
                details.push(data)
            })
            this.setState({ details: details })
        })
        this.setState({courseImage:image})
        this.setState({courseName:name})
        this.setState({ showCart: true })
    }

    componentDidMount() {
        name = this.props.match.params.id
        this.setState({ id: name })

        const data = db.collection('Classes').doc(name);
        data.get()
            .then(snapshot => {
                this.setState({ name: snapshot.get('name') })
                this.setState({ age: snapshot.get('age') })
                this.setState({ woman: snapshot.get('woman') })
                this.setState({ online: snapshot.get('online') })
                this.setState({ address: snapshot.get('address') })
                this.setState({ type: snapshot.get('type') })
                this.setState({ location: snapshot.get('location') })
            })

        const images = db.collection('Classes').doc(name).collection('Images');
        images.get()
            .then(snapshot => {
                const images = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    images.push(data)
                })
                this.setState({ images: images })
            })

        const eligibility = db.collection('Classes').doc(name).collection('Eligibility');
        eligibility.get()
            .then(snapshot => {
                const eligibility = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    eligibility.push(data)
                })
                this.setState({ eligibility: eligibility })
            })

        const qualifications = db.collection('Classes').doc(name).collection('Qualifications');
        qualifications.get()
            .then(snapshot => {
                const qualifications = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    qualifications.push(data)
                })
                this.setState({ qualifications: qualifications })
            })

        const note = db.collection('Classes').doc(name).collection('Note');
        note.get()
            .then(snapshot => {
                const note = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    note.push(data)
                })
                this.setState({ note: note })
            })

        const courses = db.collection('Classes').doc(name).collection('Courses');
        const add = db.collection('Classes').doc(name).collection('Courses');
        courses.get()
            .then(snapshot => {
                const courses = []
                const length = snapshot.size
                snapshot.forEach(doc => {
                    const data = doc.data()
                    add.doc(doc.id).update({ id: doc.id })
                    courses.push(data)
                })
                this.setState({ courses: courses })
                this.setState({ courseLength: length })
            })

        const offers = db.collection('Classes').doc(name).collection('Offers');
        offers.get()
            .then(snapshot => {
                const offers = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    offers.push(data)
                })
                this.setState({ offers: offers })
            })
    }

    render() {
        return (
            <div className='contain'>
                <div className='subContain' >
                    <div style={{ width: '1000px', margin: '20px' }} >

                        <div style={{ minHeight: '400px' }} >
                            <Carousel
                                slidesPerPage={1}
                                arrows
                                infinite
                                animationSpeed={1000}
                            >
                                {
                                    this.state.images &&
                                    this.state.images.map(image => {
                                        return (
                                            <div style={{ height: '300px' }} >
                                                <img src={image.item} height="300px" alt="a" ></img>
                                            </div>
                                        )
                                    })
                                }
                            </Carousel>
                        </div>

                        <div style={{ textAlign: 'center', fontSize: '30px', color: '#282e34' }} >
                            <h1>{this.state.name}</h1>
                        </div>
                        <div>
                            <h2>Features</h2>
                        </div>
                        <div style={{ padding: '10px', backgroundColor: '#04BF7B', color: 'white', paddingBottom: '20px', minHeight: '100px' }} >
                            <div>
                                <h2>Eligibility</h2>
                            </div>
                            {
                                this.state.eligibility &&
                                this.state.eligibility.map(item => {
                                    return (
                                        <div>{item.item}</div>
                                    )
                                })
                            }
                        </div>

                        <div style={{ minHeight: '300px' }} >
                            <div>
                                <h2>Courses</h2>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap' }} >
                                {
                                    this.state.courses &&
                                    this.state.courses.map(item => {
                                        return (
                                            <div className='courses' onClick={()=>{this.handleOpen(item.id,item.title,item.image)}} >
                                                <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }} >
                                                    <img src={item.image} alt='course' width="100px" style={{ borderRadius: '10px' }} />
                                                </div>
                                                <div style={{ marginLeft: '10px', lineHeight: 'normal' }} >
                                                    <div><h4>{item.title}</h4></div>
                                                    <div><h5>{item.price}</h5></div>
                                                    <div><h6>More Details <FaChevronCircleRight /></h6></div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>

                        <div style={{ padding: '10px', backgroundColor: '#04BF7B', color: 'white', paddingBottom: '20px', marginTop: '20px', minHeight: '100px' }} >
                            <div>
                                <h2>Qualifications</h2>
                            </div>
                            {
                                this.state.qualifications &&
                                this.state.qualifications.map(item => {
                                    return (
                                        <div>{item.item}</div>
                                    )
                                })
                            }
                        </div>

                        <div style={{ padding: '10px', paddingBottom: '20px', marginTop: '20px', minHeight: '300px' }} >
                            <div>
                                <h2>Note From Teacher</h2>
                            </div>
                            {
                                this.state.note &&
                                this.state.note.map(item => {
                                    return (
                                        <div>{item.item}</div>
                                    )
                                })
                            }
                        </div>

                    </div>

                    <div className='enroll' >
                        <div style={{ textAlign: 'center' }} >
                            <h1>Enroll</h1>
                        </div>

                        <div>
                            Get a online/offline trial class for only 10.<br />
                            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }} >
                                <Button color='secondary' variant='contained' >GET TRIAL CLASS</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />

                <Dialog open={this.state.showCart} aria-labelledby="simple-dialog-title" onClose={()=>{this.setState({showCart:false})}} >
                    <DialogTitle>{this.state.courseName}</DialogTitle>
                    <div>
                        <img src={this.state.courseImage} alt="s" width='200px' />
                    </div>
                    <div><b>What you will learn...</b></div>
                    <div style={{padding:'20px'}} >
                        {
                            this.state.details&&
                            this.state.details.map(item=>{
                                return(
                                    <div>{item.item}</div>
                                )
                            })
                        }
                    </div>
                </Dialog>

            </div>
        )
    }
}
