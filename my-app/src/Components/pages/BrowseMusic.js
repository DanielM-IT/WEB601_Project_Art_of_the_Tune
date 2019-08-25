import React, {Component} from 'react'
import Title from '../Title'
import '../../App.css'


export default class BrowseMusic extends Component {
    
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
                    <Title name="Browse" title="Music" />
                    <div className="grid">
                        <div className="promotionItem">
                            <h2>promotions here</h2>
                        </div>
                        <div className="promotionItem">
                            <h2>promotions here</h2>
                        </div>
                        <div className="promotionItem">
                            <h2>promotions here</h2>
                        </div>
                        <div className="promotionItem">
                            <h2>promotions here</h2>
                        </div>
                        <div className="promotionItem">
                            <h2>promotions here</h2>
                        </div>
                        <div className="promotionItem">
                            <h2>promotions here</h2>
                        </div>
                        <div className="promotionItem">
                            <h2>promotions here</h2>
                        </div>
                        <div className="promotionItem">
                            <h2>promotions here</h2>
                        </div>
                        <div className="promotionItem">
                            <h2>promotions here</h2>
                        </div>
                        <div className="promotionItem">
                            <h2>promotions here</h2>
                        </div>
                        <div className="promotionItem">
                            <h2>promotions here</h2>
                        </div>
                        <div className="promotionItem">
                            <h2>promotions here</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}