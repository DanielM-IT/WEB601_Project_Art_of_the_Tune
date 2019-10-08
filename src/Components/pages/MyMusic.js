import React, {Component} from 'react'
import Title from '../Title'


export default class MyMusic extends Component {
    render() {
        return(
            <div className="container">
                <div className="listColumn">
                    <h3>Categories</h3>
                    <ul>
                        <li>Category 1</li>
                        <li>Category 2</li>
                        <li>Category 3</li>
                        <li>Category 4</li>
                        <li>Category 5</li>
                        <li>Category 6</li>
                        <li>Category 7</li>
                        <li>Category 8</li>
                        <li>Category 9</li>
                    </ul>
                </div>
                <div className='contentColumn'>
                    <Title name="My" title="Music" />
                    <div className="grid">
                        <div className="promotionItem">
                            <h2>My music here</h2>
                        </div>
                        <div className="promotionItem">
                            <h2>My music here</h2>
                        </div>
                        <div className="promotionItem">
                            <h2>My music here</h2>
                        </div>
                        <div className="promotionItem">
                            <h2>My music here</h2>
                        </div>
                        <div className="promotionItem">
                            <h2>My music here</h2>
                        </div>
                        <div className="promotionItem">
                            <h2>My music here</h2>
                        </div>
                        <div className="promotionItem">
                            <h2>My music here</h2>
                        </div>
                        <div className="promotionItem">
                            <h2>My music here</h2>
                        </div>
                        <div className="promotionItem">
                            <h2>My music here</h2>
                        </div>
                        <div className="promotionItem">
                            <h2>My music here</h2>
                        </div>
                        <div className="promotionItem">
                            <h2>My music here</h2>
                        </div>
                        <div className="promotionItem">
                            <h2>My music here</h2>
                        </div>
                    </div>
                </div>  
            </div> 
        )
    }
}