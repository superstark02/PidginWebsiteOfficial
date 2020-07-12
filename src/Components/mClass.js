import React, { Component } from 'react'
import Divider from '@material-ui/core/Divider';
import './mClass.css'
import { FaMapMarkerAlt } from 'react-icons/fa';

export class MobileClass extends Component {

    render() {
        return (
            <div style={{ backgroundColor: 'white', position: 'absolute', zIndex: '300', maxWidth: '100%', width: '100%' }}>
                <div class='overlayContainer'>

                    <div class='carouselContainer' style={{ height: '250px' }} >
                        {
                            this.props.images &&
                            this.props.images.map(image => {
                                return (
                                    <div class="w3-animate-zoom"><img src={image.item} alt="" height='250px' width='auto' class='imageCarousel' /></div>
                                )
                            })
                        }
                    </div>
                </div>

                <div>
                    <div class='displayTitle'>
                        {this.props.name}
                        <div class='mapIcon'>
                            <a href="/" ><FaMapMarkerAlt color='#043540' /></a>
                            <div style={{ fontSize: '10px' }} >Map</div>
                        </div>
                    </div>
                </div>

                <div class='displaySubtitle'>
                    <div>{this.props.address}</div>
                    <div style={{ display: 'flex' }} >
                        <div class='displayAge'>
                            Age: {this.props.age}+
                        </div>
                        <div class='displayType' >
                            {this.props.type}
                        </div>
                    </div>
                    <Divider />
                </div>
            </div>
        )
    }
}

export default MobileClass
