import React from 'react'
import { Animated } from 'react-animated-css'

import Box from '../Components/box'
import Video_Container from '../Components/Video/Video'



export default function Video() {
    return (
        
            <Animated animationIn="fadeInUp" animationOut="flipOutX" animationInDuration={600} animationOutDuration={400} isVisible={true}>
                <Box/>
                 <Video_Container/>
            </Animated>
        
    )
}

