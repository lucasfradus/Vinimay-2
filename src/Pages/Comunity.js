import React from 'react'
import { Animated } from 'react-animated-css'
import Box from '../Components/box'
import DownCom from '../Components/Community/DownCom'
import ListShirt from '../Components/Community/ListShirt'
import Museo from '../Components/Community/Museo'
import Questions from '../Components/Community/Questions'
import TopTen from '../Components/Community/TopTen'
import ButtomTitle from '../Components/Community/ButtomTitle'

import TeamVini from '../Components/Community/TeamVini'
import TitleCom from '../Components/Community/TitleCom'
import Carret from '../images/double_carret.jpg'
import {useTranslation} from "react-i18next";


import Imagen1 from '../images/camisetas/1.jpg'
import Imagen2 from '../images/camisetas/2.jpg'
import Imagen3 from '../images/camisetas/3.jpg'
import Imagen4 from '../images/camisetas/4.jpg'
import Imagen5 from '../images/camisetas/5.jpg'
import Imagen6 from '../images/camisetas/6.jpg'
import Imagen7 from '../images/camisetas/7.jpg'
import Imagen8 from '../images/camisetas/8.jpg'

import Exibe from '../images/archivos-01.png'
import Inter from '../images/archivos-02.png'
import Vend from '../images/archivos-03.png'

export default function Comunity() {
    const [t] = useTranslation('common');

    /* Datos a actualizar todos los meses */

    const TopShirts = [
        {
            user:'lascasacasquetengo',
            year:'2019',
            club:'Arsenal',
            country:t('comunity.ListShirt.england'),
            image:Imagen1,
            tipo:Exibe
        },
        {
            user:'ferchodenis',
            year:'2009',
            club:'Barcelona FC',
            country:t('comunity.ListShirt.spain'),
            image:Imagen2,
            tipo:Vend
        },
        {
            user:'edgarpalomar',
            year:'1995',
            club:'Boca Juniors',
            country:t('comunity.ListShirt.argentina'),
            image:Imagen3,
            tipo:Exibe
        },
        {
            user:'polaco',
            year:'1997',
            club:'Independiente',
            country:t('comunity.ListShirt.argentina'),
            image:Imagen4,
            tipo:Vend
        },
        {
            user:'pablorg239',
            year:'2018',
            club:'Nacional de Uruguay',
            country:t('comunity.ListShirt.uruguay'),
            image:Imagen5,
            tipo:Exibe
        },
        {
            user:'nicolasfll',
            year:'2014',
            club:'Argentina',
            country:t('comunity.ListShirt.argentina'),
            image:Imagen6,
            tipo:Inter
        },
        {
            user:'eliasturbay',
            year:'2007',
            club:'Racing Club',
            country:t('comunity.ListShirt.argentina'),
            image:Imagen7,
            tipo:Inter
        },
        {
            user:'facugallardo14',
            year:'2014',
            club:'River Plate',
            country:t('comunity.ListShirt.argentina'),
            image:Imagen8,
            tipo:Exibe
        },
    ]

    const TopCounter = [91,1829];
    
    const Top3 = [
        {
            username:'SEBACUEVAS32',
            number:'2',
            user: 'SEBACUEVAS32',
            countShirt:'258'
        },  
        {
            username:'PABLORH239',
            number:'1',
            user: 'PABLORH239',
            countShirt:'364'
        },
        {
            username:'MATICALVETE',
            number:'3',
            user: 'MATICALVETE',
            countShirt:'185'
    } 
    ]
    const Top10 = [
        {
            number:'4',
            user: 'LASCASACASQUETENGO',
            countShirt:'124'
        },  
        {
            number:'5',
            user: 'SEBA',
            countShirt:'73'
        },  
        {
            number:'6',
            user: 'CASACASCARP',
            countShirt:'71'
        },      
        {
            number:'7',
            user: 'CHEVA091218',
            countShirt:'55'
        },      
        {
            number:'8',
            user: 'FACUGALLARDO14',
            countShirt:'53'
        },
        {
            number:'9',
            user: 'ELIASTURBAY',
            countShirt:'42'
        }, 
        {
            number:'10',
            user: 'PIELCARP',
            countShirt:'37'
        },   
    ]

    /* FIN Datos a actualizar todos los meses */

    return (
        <div className="page-comunidad">
            <Box/>
            <Animated animationIn="fadeInUp" animationOut="flipOutX" animationInDuration={600} animationOutDuration={400} isVisible={true}>
                <TitleCom translate={t}/>
                <br/>
                <img alt="" src={Carret} className="carret"/>
            </Animated>
            <Animated animationIn="fadeInUp" animationOut="flipOutX" animationInDuration={600} animationOutDuration={400} isVisible={true}>
                <ListShirt  TopShirts={TopShirts}  translate={t}/>
            </Animated>
            <Animated animationIn="fadeInUp" animationOut="flipOutX" animationInDuration={600} animationOutDuration={400} isVisible={true}>
                <Museo counter={TopCounter} translate={t}/>
                <TopTen Top3={Top3} Top10={Top10} translate={t}/>
                <ButtomTitle translate={t}/>

            </Animated>

            <Questions translate={t}/>
            <TeamVini translate={t}/>
            <DownCom translate={t}/>
        </div>
    )
}
