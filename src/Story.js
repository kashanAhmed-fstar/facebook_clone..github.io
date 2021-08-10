import React from 'react'
import { Avatar } from '@material-ui/core'
import "./Story.css"

function Story({image,profilesrc,title}) {
    return (
        <div style={{backgroundImage: `url(${image})`}}
         className="story">
        <Avatar className="story__avator" src={profilesrc}/>
        <h4>{title}</h4>
        </div>
    )
}

export default Story
