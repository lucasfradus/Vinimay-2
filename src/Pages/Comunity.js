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

const Comunity = () => {
    const [t, i18n] = useTranslation('common');

    /* Datos a actualizar todos los meses */

    const TopShirts = [
        {
            user:'dani27r',
            club:'Olympique de marsella',
            country:t('comunity.ListShirt.france'),
            year:'2019',
            image:Imagen1,
            tipo:Vend
        },
        {
            user:'martin.joge',
            club:'Udinese',
            country:t('comunity.ListShirt.italy'),
            year:'2017',
            image:Imagen2,
            tipo:Vend
        },
        {
            user:'glorioso83',
            club:'Seleccion Nacional',
            country:t('comunity.ListShirt.south_sudan'),
            year:'2016',
            image:Imagen3,
            tipo:Vend
        },
        {
            user:'damibutiler',
            club:'Manchester Uniter',
            country:t('comunity.ListShirt.england'),
            year:'2008',
            image:Imagen4,
            tipo:Vend
        },
        {
            user:'maxideprati',
            club:'Independiente',
            country:t('comunity.ListShirt.argentina'),
            year:'2012',
            image:Imagen5,
            tipo:Inter
        },
        {
            user:'daniel',
            club:'Selección Nacional',
            country:t('comunity.ListShirt.argentina'),
            year:'2006',
            image:Imagen6,
            tipo:Inter
        },
        {
            user:'gaston79',
            club:'Olimpi',
            country:t('comunity.ListShirt.argentina'),
            year:'2018',
            image:Imagen7,
            tipo:Inter
        },
        {
            user:'elcayo',
            club:'Selección Nacional',
            country:t('comunity.ListShirt.russia'),
            year:'2016',
            image:Imagen8,
            tipo:Inter
        },
    ]

    const TopCounter = [914,10582];
    const month = [t('comunity.months.jul')];
    
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
            countShirt:'414'
        },
        {
            username:'robertobaigo',
            number:'3',
            user: 'robertobaigo',
            countShirt:'200'
    } 
    ]
    const Top10 = [
        {
            number:'4',
            user: 'MATICALVETE',
            countShirt:'197'
        },  
        {
            number:'5',
            user: 'guga.7',
            countShirt:'174'
        },  
         
        {
            number:'6',
            user: 'lcidfig',
            countShirt:'168'
        },  
        {
            number:'7',
            user: 'feinschteiger',
            countShirt:'160'
        },     
        {
            number:'8',
            user: 'fabbian_campos',
            countShirt:'150'
        },
        {
            number:'9',
            user: 'lascasacasqtengo',
            countShirt:'148'
        }, 
        {
            number:'10',
            user: 'bryan hernandez arellano',
            countShirt:'147'
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