import React from 'react'
import Box from '../Components/box'
import Downin from '../Components/Contact/Downin'
import { Animated } from 'react-animated-css'
import Form from '../Components/NotFound/NotFound'

export default function NotFoundPage() {
    return (
        <div className='pageContacto'>
            <Box/>

            <Animated animationIn="fadeInUp" animationOut="flipOutX" animationInDuration={600} animationOutDuration={400} isVisible={true}>
                <Form/>
            </Animated>
            <Animated animationIn="fadeInUp" animationOut="flipOutX" animationInDuration={600} animationOutDuration={400} isVisible={true}>
                <Downin/>
            </Animated>
        </div>
    )
}
