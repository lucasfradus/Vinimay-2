import React from 'react'
import Box from '../Components/box'
import Downin from '../Components/Faq/Downin'
import { Animated } from 'react-animated-css'
import {useTranslation} from "react-i18next";
import Questions from '../Components/Faq/Questions'
import { Helmet } from 'react-helmet';

export default function Faq() {

    const [t, i18n] = useTranslation('common');

    return (
        <div className="page-comunidad">
            <Helmet>
                <title>FAQ</title>
            </Helmet>
            <Box/>
            <Animated animationIn="fadeInUp" animationOut="flipOutX" animationInDuration={600} animationOutDuration={400} isVisible={true}>
                    <Questions translate={t}/>
            </Animated>
            <Animated animationIn="fadeInUp" animationOut="flipOutX" animationInDuration={600} animationOutDuration={400} isVisible={true}>
                <Downin translate={t} i18n={i18n} />
            </Animated>
        </div>
    )
}
