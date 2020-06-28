import React from 'react'
import { db } from '../firebase'
import './List.css'
import { Link} from 'react-router-dom';

export default class MyList extends React.Component {

    state = {
        item: null,
        length: 0,
    }

    componentDidMount() {
        const data = db.collection('Classes');
        data.get()
            .then(snapshot => {
                const len = snapshot.size
                this.setState({ length: len })
                const item = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                    item.push(data)
                })
                this.setState({ item: item })
            })
    }

    render() {
        return (
            <div className='list' >
                <div className='ribbon' >
                    Found {this.state.length} Pidgin classes around you.
                </div>
                <div style={{ display: 'flex', maxWidth: '100%', flexWrap: 'wrap',justifyContent:'space-around'}} >
                    {
                        this.state.item &&
                        this.state.item.map(item => {
                            return (
                                <div className='items' >
                                    <div style={{ width: '100%',height:'200px'}} >
                                        <img src={item.i1} height='200px' alt='s'/>
                                    </div>
                                    
                                    <div style={{ textAlign: 'left' }} >
                                        <Link to={{
                                            pathname: '/class/'+item.id,
                                        }}>
                                            <div className='heading' >{item.name}</div>
                                            <div style={{ fontSize: '13px', lineHeight: 'normal',margin:'15px 0px',color:'grey'}} >{item.address}</div>
                                        </Link>
                                        <div className='fees' >Staring Fees: {item.fees}</div>
                                    </div>
                                    <div style={{display:'flex',justifyContent:'space-between',border:'solid 1px grey',padding:'10px',marginTop:'15px'}} >
                                        <div className='detail' >{item.type}</div>
                                        <div className='detail' >Age: {item.age}+</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}