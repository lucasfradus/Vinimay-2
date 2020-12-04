import React from 'react'
import Box from '../Components/box'
import Downin from '../Components/Contact/Downin'
import { Animated } from 'react-animated-css'
import Form from '../Components/NotFound/NotFound'
import {useTranslation} from "react-i18next";


export default function NotFoundPage() {

    const [t, i18n] = useTranslation('common');



    return (
        <div className='pageContacto'>
            <Box/>

            <Animated animationIn="fadeInUp" animationOut="flipOutX" animationInDuration={600} animationOutDuration={400} isVisible={true}>
                <Form translate={t}/>
            </Animated>
            <Animated animationIn="fadeInUp" animationOut="flipOutX" animationInDuration={600} animationOutDuration={400} isVisible={true}>
                <Downin translate={t} i18n={i18n} />
            </Animated>
        </div>
    )
}
