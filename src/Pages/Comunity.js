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
            user:'pielcarp',
            club:'River Plate',
            country:t('comunity.ListShirt.argentina'),
            year:'2021',
            image:Imagen1,
            tipo:Exibe
        },
        {
            user:'nacionalcolección',
            club:'Club Nacional',
            country:t('comunity.ListShirt.uruguay'),
            year:'2011',
            image:Imagen2,
            tipo:Vend
        },
        {
            user:'camisetaswrs',
            club:'San Telmo',
            country:t('comunity.ListShirt.argentina'),
            year:'2015',
            image:Imagen3,
            tipo:Inter
        },
        {
            user:'lcidfig',
            club:'Selección Nacional',
            country:t('comunity.ListShirt.chile'),
            year:'1996',
            image:Imagen4,
            tipo:Exibe
        },
        {
            user:'mmf',
            club:'General Velasquez',
            country:t('comunity.ListShirt.chile'),
            year:'1989',
            image:Imagen5,
            tipo:Exibe
        },
        {
            user:'camisetas.16',
            club:'Cercle Brugge',
            country:t('comunity.ListShirt.belgium'),
            year:'2013',
            image:Imagen6,
            tipo:Vend
        },
        {
            user:'frivintageshirts',
            club:'Selección Nacional',
            country:t('comunity.ListShirt.uruguay'),
            year:'1996',
            image:Imagen7,
            tipo:Vend
        },
        {
            user:'leomessicollector',
            club:'Barcelona',
            country:t('comunity.ListShirt.spain'),
            year:'2019',
            image:Imagen8,
            tipo:Exibe
        },
    ]

    const TopCounter = [420,6345];
    const month = [t('comunity.months.mar')];
    
    const Top3 = [
        {
            username:'sebacuevas32',
            number:'2',
            user: 'sebacuevas32',
            countShirt:'298'
        },  
        {
            username:'PABLORH239',
            number:'1',
            user: 'PABLORH239',
            countShirt:'377'
        },
        {
            username:'MATICALVETE',
            number:'3',
            user: 'MATICALVETE',
            countShirt:'194'
    } 
    ]
    const Top10 = [
        {
            number:'4',
            user: 'LASCASACASQUETENGO',
            countShirt:'146'
        },  
        {
            number:'5',
            user: 'bryan hernandez arellano',
            countShirt:'145'
        },  
        {
            number:'6',
            user: 'lcidfig',
            countShirt:'132'
        },      
        {
            number:'7',
            user: 'guga.7',
            countShirt:'129'
        },      
        {
            number:'8',
            user: 'fabbian_campos',
            countShirt:'125'
        },
        {
            number:'9',
            user: 'feinschteiger',
            countShirt:'106'
        }, 
        {
            number:'10',
            user: 'coleccionistaderiver',
            countShirt:'101'
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

            {/*<Questions translate={t}/>*/ }
            <TeamVini translate={t}/>
            <DownCom translate={t}/>
        </div>
    )
}

export default Comunity;