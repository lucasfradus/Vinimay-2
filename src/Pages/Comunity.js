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
            user:'museo_azulgrana',
            club:'Cerro Porteño',
            country:t('comunity.ListShirt.paraguay'),
            year:'1995',
            image:Imagen1,
            tipo:Exibe
        },
        {
            user:'ferchu_elcoleccionista2021',
            club:'Lyon',
            country:t('comunity.ListShirt.argentina'),
            year:'2010',
            image:Imagen2,
            tipo:Exibe
        },
        {
            user:'fava30',
            club:'River Plate',
            country:t('comunity.ListShirt.argentina'),
            year:'2018',
            image:Imagen3,
            tipo:Vend
        },
        {
            user:'bautista17',
            club:'Los Angeles Galaxy',
            country:t('comunity.ListShirt.usa'),
            year:'2015',
            image:Imagen4,
            tipo:Vend
        },
        {
            user:'edu lara',
            club:'Selección Francia',
            country:t('comunity.ListShirt.france'),
            year:'1994',
            image:Imagen5,
            tipo:Inter
        },
        {
            user:'gaston matías',
            club:'Racing Club de Lens',
            country:t('comunity.ListShirt.france'),
            year:'1996',
            image:Imagen6,
            tipo:Inter
        },
        {
            user:'camisetas.vzk',
            club:'Selección Italia',
            country:t('comunity.ListShirt.italy'),
            year:'2014',
            image:Imagen7,
            tipo:Vend
        },
        {
            user:'juancruz514',
            club:'Liverpool',
            country:t('comunity.ListShirt.england'),
            year:'2017',
            image:Imagen8,
            tipo:Exibe
        },
    ]

    const TopCounter = [204,3260];
    const month = [t('comunity.months.feb')];
    
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
            <TeamVini translate={t}/>
            <DownCom translate={t}/>
        </div>
    )
}

export default Comunity;