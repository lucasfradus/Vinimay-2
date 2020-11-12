import React from 'react'
import { Animated } from 'react-animated-css'

import Box from '../Components/box'
import VideoContainer from '../Components/Video/Video'



export default function Video() {
    return (
        
            <Animated animationIn="fadeInUp" animationOut="flipOutX" animationInDuration={600} animationOutDuration={400} isVisible={true}>
                <Box/>
                 <VideoContainer/>
            </Animated>
        
    )
}

