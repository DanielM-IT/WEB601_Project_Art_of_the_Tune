import React, {Component} from 'react'
import Title from '../Title'
import { BtnContainer } from '../Buttons';


export default class UploadMusic extends Component {
    render() {
        return(
            <div className="container">
                <div className="leftColumn">
        
                </div>
                <div className="middleColumn">
                    <Title name="Upload Music" title="Here" />
                    <div className="grid">
                        <div className="uploadItem">
                            <h2>Upload music here</h2>
                            <BtnContainer>
                                Browse
                            </BtnContainer>
                            <BtnContainer>
                                UploadMusic
                            </BtnContainer>
                        </div>
                    </div>
                </div>
                <div className="rightColumn">

                </div>   
            </div> 
        )
    }
}