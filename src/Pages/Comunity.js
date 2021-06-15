import React from 'react'
import { Animated } from 'react-animated-css'
import Box from '../Components/box'
import DownCom from '../Components/Community/DownCom'
import ListShirt from '../Components/Community/ListShirt'
import Museo from '../Components/Community/Museo'
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
            user:'casacascarp',
            club:'River Plate',
            country:t('comunity.ListShirt.argentina'),
            year:'2015',
            image:Imagen1,
            tipo:Vend
        },
        {
            user:'maxigandolfi',
            club:'Inter ',
            country:t('comunity.ListShirt.italy'),
            year:'1987',
            image:Imagen2,
            tipo:Vend
        },
        {
            user:'pollogol_camisetas ',
            club:'Newells',
            country:t('comunity.ListShirt.argentina'),
            year:'1995',
            image:Imagen3,
            tipo:Vend
        },
        {
            user:'camisetas.vzk',
            club:'Sheffield united',
            country:t('comunity.ListShirt.england'),
            year:'2016',
            image:Imagen4,
            tipo:Vend
        },
        {
            user:'maxideprati',
            club:'Independiente',
            country:t('comunity.ListShirt.argentina'),
            year:'1995',
            image:Imagen5,
            tipo:Inter
        },
        {
            user:'elcayo.16',
            club:'Celtic',
            country:t('comunity.ListShirt.scotland'),
            year:'2010',
            image:Imagen6,
            tipo:Inter
        },
        {
            user:'marcoszizu',
            club:'Milan',
            country:t('comunity.ListShirt.italy'),
            year:'2013',
            image:Imagen7,
            tipo:Inter
        },
        {
            user:'matteogardonio',
            club:'Selección Nacional',
            country:t('comunity.ListShirt.egypt'),
            year:'2007',
            image:Imagen8,
            tipo:Inter
        },
    ]

    const TopCounter = [670,9668];
    const month = [t('comunity.months.jun')];
    
    const Top3 = [
        {
            username:'sebacuevas32',
            number:'2',
            user: 'sebacuevas32',
            countShirt:'344'
        },  
        {
            username:'PABLORH239',
            number:'1',
            user: 'PABLORH239',
            countShirt:'408'
        },
        {
            username:'MATICALVETE',
            number:'3',
            user: 'MATICALVETE',
            countShirt:'197'
    } 
    ]
    const Top10 = [
        {
            number:'4',
            user: 'robertobaigo',
            countShirt:'182'
        },  
        {
            number:'5',
            user: 'lcidfig',
            countShirt:'166'
        },  
         
        {
            number:'6',
            user: 'guga.7',
            countShirt:'163'
        },  
        {
            number:'6',
            user: 'feinschteiger',
            countShirt:'160'
        },     
        {
            number:'8',
            user: 'lascasacasqtengo',
            countShirt:'148'
        },
        {
            number:'9',
            user: 'bryan hernandez arellano',
            countShirt:'146'
        }, 
        {
            number:'10',
            user: 'fabbian_campos',
            countShirt:'131'
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

            <DownCom translate={t}/>
        </div>
    )
}

export default Comunity;