import React from 'react'
import { Animated } from 'react-animated-css'
import Box from '../Components/box'
import DownCom from '../Components/Community/DownCom'
import ListShirt from '../Components/Community/ListShirt'
import Museo from '../Components/Community/Museo'
import Questions from '../Components/Community/Questions'
import TopTen from '../Components/Community/TopTen'
import ButtomTitle from '../Components/Community/ButtomTitle'

import TitleCom from '../Components/Community/TitleCom'
import Carret from '../images/double_carret.jpg'
import {useTranslation} from "react-i18next";
import { Helmet } from 'react-helmet';


import Imagen1 from '../images/camisetas/1.jpeg'
import Imagen2 from '../images/camisetas/2.jpeg'
import Imagen3 from '../images/camisetas/3.jpeg'
import Imagen4 from '../images/camisetas/4.jpeg'
import Imagen5 from '../images/camisetas/5.jpeg'
import Imagen6 from '../images/camisetas/6.jpeg'
import Imagen7 from '../images/camisetas/7.jpeg'
import Imagen8 from '../images/camisetas/8.jpeg'

import Exibe from '../images/archivos-01.png'
import Inter from '../images/archivos-02.png'
import Vend from '../images/archivos-03.png'

const Comunity = () => {
    const [t, i18n] = useTranslation('common');

    /* Datos a actualizar todos los meses */

    const TopShirts = [
        {
            user:'rrreddevilcai',
            club:'Porto',
            country:t('comunity.ListShirt.portugal'),
            year:'2018',
            image:Imagen1,
            tipo:Vend
        },
        {
            user:'alí',
            club:'River Plate',
            country:t('comunity.ListShirt.argentina'),
            year:'2006',
            image:Imagen2,
            tipo:Inter
        },
        {
            user:'iamchinook',
            club:'Juventus',
            country:t('comunity.ListShirt.italy'),
            year:'2006',
            image:Imagen3,
            tipo:Inter
        },
        {
            user:'agustin maillet',
            club:'Independiente ',
            country:t('comunity.ListShirt.argentina'),
            year:'2017',
            image:Imagen4,
            tipo:Inter
        },
        {
            user:'plunatiok',
            club:'Selección Nacional',
            country:t('comunity.ListShirt.paraguay'),
            year:'2008',
            image:Imagen5,
            tipo:Vend
        },
        {
            user:'camisetas.16',
            club:'Crystal Palace',
            country:t('comunity.ListShirt.england'),
            year:'2015',
            image:Imagen6,
            tipo:Vend
        },
        {
            user:'florcamisetas',
            club:'Atlas Fútbol Club',
            country:t('comunity.ListShirt.mexico'),
            year:'1999',
            image:Imagen7,
            tipo:Vend
        },
        {
            user:'edu lara',
            club:'Selección Nacional',
            country:t('comunity.ListShirt.italy'),
            year:'1990',
            image:Imagen8,
            tipo:Inter
        },
    ]

    const TopCounter = [450,7500];
    const month = [t('comunity.months.apr')];
    
    const Top3 = [
        {
            username:'sebacuevas32',
            number:'2',
            user: 'sebacuevas32',
            countShirt:'333'
        },  
        {
            username:'PABLORH239',
            number:'1',
            user: 'PABLORH239',
            countShirt:'391'
        },
        {
            username:'MATICALVETE',
            number:'3',
            user: 'MATICALVETE',
            countShirt:'195'
    } 
    ]
    const Top10 = [
        {
            number:'4',
            user: 'robertobaigo',
            countShirt:'165'
        },  
        {
            number:'5',
            user: 'feinschteiger',
            countShirt:'160'
        },  
        {
            number:'6',
            user: 'guga.7',
            countShirt:'150'
        },      
        {
            number:'7',
            user: 'lcidfig',
            countShirt:'146'
        },      
        {
            number:'8',
            user: 'lascasacasqtengo',
            countShirt:'146'
        },
        {
            number:'9',
            user: 'bryan hernandez arellano',
            countShirt:'146'
        }, 
        {
            number:'10',
            user: 'fabbian_campos',
            countShirt:'125'
        },   
    ]

    /* FIN Datos a actualizar todos los meses */

    return (

        <div className="page-comunidad">
            <Helmet>
                <title>Comunidad</title>
            </Helmet>
            <Box/>
            <Animated animationIn="fadeInUp" animationOut="flipOutX" animationInDuration={600} animationOutDuration={400} isVisible={true}>
                <TitleCom month={month} translate={t}/>
                <br/>
                <img alt="" src={Carret} className="carret"/>
            </Animated>
            <Animated animationIn="fadeInUp" animationOut="flipOutX" animationInDuration={600} animationOutDuration={400} isVisible={true}>
                <ListShirt  TopShirts={TopShirts}  translate={t}/>
            </Animated>
            <Animated animationIn="fadeInUp" animationOut="flipOutX" animationInDuration={600} animationOutDuration={400} isVisible={true}>
                <Museo i18n={i18n} counter={TopCounter} translate={t}/>
                <TopTen  i18n={i18n} Top3={Top3} Top10={Top10} translate={t}/>
                <ButtomTitle translate={t}/>

            </Animated>

            <Questions translate={t}/>
            <DownCom translate={t}/>
        </div>
    )
}

export default Comunity;