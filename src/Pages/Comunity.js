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
            user:'nahuelheredia17',
            club:'Belgrano',
            country:t('comunity.ListShirt.argentina'),
            year:'1998',
            image:Imagen1,
            tipo:Inter
        },
        {
            user:'piluai666',
            club:'Velez',
            country:t('comunity.ListShirt.argentina'),
            year:'2018',
            image:Imagen2,
            tipo:Inter
        },
        {
            user:'maxideprati',
            club:'Independiente',
            country:t('comunity.ListShirt.argentina'),
            year:'2015',
            image:Imagen3,
            tipo:Inter
        },
        {
            user:'elcayo',
            club:'Manchester Uniter',
            country:t('comunity.ListShirt.england'),
            year:'2011',
            image:Imagen4,
            tipo:Inter
        },
        {
            user:'joaruiz',
            club:'Boca Juniors ',
            country:t('comunity.ListShirt.argentina'),
            year:'2014',
            image:Imagen5,
            tipo:Inter
        },
        {
            user:'cesar78',
            club:'Real Madrid',
            country:t('comunity.ListShirt.spain'),
            year:'1992',
            image:Imagen6,
            tipo:Vend
        },
        {
            user:'jere11',
            club:'Leones Negros UdeG',
            country:t('comunity.ListShirt.mexico'),
            year:'2019',
            image:Imagen7,
            tipo:Vend
        },
        {
            user:'cristiano10',
            club:'Chelsea',
            country:t('comunity.ListShirt.england'),
            year:'2016',
            image:Imagen8,
            tipo:Vend
        },
    ]

    const TopCounter = [785,11139];
    const month = [t('comunity.months.ago')];
    
    const Top3 = [
        {
            username:'sebacuevas32',
            number:'2',
            user: 'sebacuevas32',
            countShirt:'359'
        },  
        {
            username:'PABLORH239',
            number:'1',
            user: 'PABLORH239',
            countShirt:'423'
        },
        {
            username:'robertobaigo',
            number:'3',
            user: 'robertobaigo',
            countShirt:'216'
    } 
    ]
    const Top10 = [
        {
            number:'4',
            user: 'MATICALVETE',
            countShirt:'200'
        },  
        {
            number:'5',
            user: 'guga.7',
            countShirt:'180'
        },  
         
        {
            number:'6',
            user: 'lcidfig',
            countShirt:'171'
        },  
        {
            number:'7',
            user: 'feinschteiger',
            countShirt:'160'
        },     
        {
            number:'8',
            user: 'silorhaless',
            countShirt:'155'
        },
        {
            number:'9',
            user: 'fabbian_campos',
            countShirt:'150'
        }, 
        {
            number:'10',
            user: 'lascasacasqtengo',
            countShirt:'148'
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