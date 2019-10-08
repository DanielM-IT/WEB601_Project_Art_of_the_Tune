import React from 'react'


export default class Song extends React.Component {

    render() {
        return(
            <div className="readSongGrid">
            {this.props.songs.map((Song) => (
               <div key={Song.ID} className="module">
                  <h2><u>Title</u></h2>
                  <h3>{Song.Title}</h3>  
                  <h2><u>Author</u></h2>
                  <h3>{Song.Author}</h3>
                  <h2><u>Length</u></h2>
                  <h3>{Song.Length}</h3>
                  <h2><u>Genre</u></h2>
                  <h3>{Song.Genre}</h3>
               </div>
            ))}
            </div>
        )
    }
}
