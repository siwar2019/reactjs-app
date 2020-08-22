 import React, { Component } from 'react'
 import { Player } from 'video-react';
class Landing extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1>helloooooooooooooooo</h1>
          <Player
      playsInline
      poster="/assets/poster.png"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
          </div>
        </div>
      </div>
    )
  }
}

export default Landing 

