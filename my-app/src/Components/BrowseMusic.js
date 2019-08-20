import React, {Component} from 'react'
import Title from './Title'
import '../App.css'

export default class BrowseMusic extends Component {
    state={
        songs:[]
    }
    render() {
        console.log(this.state.songs)
        return(
            <div className="container">
                <div className="listColumn">
                    <h3>Categories</h3>
                </div>
                <div className='contentColumn'>
                    <Title name="Browse" title="Music" />
                </div>
            </div>
        )
    }
}