import React from 'react';
import imgfill from '../images/Fill 219.png'
import './Main.css'
export default function Main(props) {
    return (
        <div>
            <div className='main'>
                <img src={props.imageUrl} className='main-img'/>
                <div className='main-left'>
                    <div className='main-up'>
                        <img src={imgfill} />
                        <h5 className='main-location'>{props.location}</h5>
                        <a href={props.googleMapsUrl} className='main-google'> View on Google Map</a>
                    </div>
                    <h3 className='main-title'>{props.title}</h3>
                    <h4 className='main-data'>{props.startDate} - {props.endDate}</h4>
                    <p className='main-text'>{props.description}</p>
                </div>
            </div>
            <hr className='row'/>
        </div>

        
    )
}