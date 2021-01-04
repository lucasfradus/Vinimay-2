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
            user:'gaston_matias',
            year:'2002',
            club:'Real Sociedad',
            country:t('comunity.ListShirt.spain'),
            image:Imagen1,
            tipo:Exibe
        },
        {
            user:'casacas_as',
            year:'2005',
            club:'Lyon',
            country:t('comunity.ListShirt.france'),
            image:Imagen2,
            tipo:Vend
        },
        {
            user:'tanoboca2020',
            year:'1996',
            club:'Boca Juniors',
            country:t('comunity.ListShirt.argentina'),
            image:Imagen3,
            tipo:Exibe
        },
        {
            user:'cekcarp2021',
            year:'1992',
            club:'Arsenal',
            country:t('comunity.ListShirt.england'),
            image:Imagen4,
            tipo:Vend
        },
        {
            user:'coleccióncarp',
            year:'2006',
            club:'River Plate',
            country:t('comunity.ListShirt.argentina'),
            image:Imagen5,
            tipo:Exibe
        },
        {
            user:'sacra maglia',
            year:'1913',
            club:'Argentina',
            country:t('comunity.ListShirt.argentina'),
            image:Imagen6,
            tipo:Inter
        },
        {
            user:'camisetas.vzk',
            year:'2012',
            club:'Inter',
            country:t('comunity.ListShirt.italy'),
            image:Imagen7,
            tipo:Vend
        },
        {
            user:'coleccionista_sap',
            year:'2001',
            club:'Selección Argentina',
            country:t('comunity.ListShirt.argentina'),
            image:Imagen8,
            tipo:Exibe
        },
    ]

    const TopCounter = [138,2313];
    
    const Top3 = [
        {
            username:'SEBACUEVAS32',
            number:'2',
            user: 'SEBACUEVAS32',
            countShirt:'263'
        },  
        {
            username:'PABLORH239',
            number:'1',
            user: 'PABLORH239',
            countShirt:'365'
        },
        {
            username:'MATICALVETE',
            number:'3',
            user: 'MATICALVETE',
            countShirt:'187'
    } 
    ]
    const Top10 = [
        {
            number:'4',
            user: 'LASCASACASQUETENGO',
            countShirt:'132'
        },  
        {
            number:'5',
            user: 'SEBA',
            countShirt:'75'
        },  
        {
            number:'6',
            user: 'CASACASCARP',
            countShirt:'72'
        },      
        {
            number:'7',
            user: 'FACUGALLARDO14',
            countShirt:'57'
        },      
        {
            number:'8',
            user: 'CHEVA091218',
            countShirt:'55'
        },
        {
            number:'9',
            user: 'ELIASTURBAY',
            countShirt:'42'
        }, 
        {
            number:'10',
            user: 'CASACAS_AS',
            countShirt:'41'
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
                <TitleCom translate={t}/>
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
            <TeamVini translate={t}/>
            <DownCom translate={t}/>
        </div>
    )
}

export default Comunity;