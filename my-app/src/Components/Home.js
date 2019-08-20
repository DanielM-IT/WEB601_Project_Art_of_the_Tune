import React, {Component} from 'react'
import featureImage from '../images/black_business_technology.jpg'

export default class Home extends Component {
    render() {
        return(
            <div className="landingPageWrapper">
                <div className="featureContainer">
                    <img src={featureImage} alt="featureMic" className="featureImage" /> 
                </div>
                <div className="gridContainer">
                    <h2>promotions here</h2>
                </div>
            </div>
        )
    }
}