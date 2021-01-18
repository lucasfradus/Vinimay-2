import React, {useState}  from 'react'
import { Helmet } from 'react-helmet';

import Nov from '../images/archivos-17.jpg'

import AndroidImg_es from '../images/es/archivos-06.png'
import AndroidImg_en from '../images/en/archivos-06.png'

import IOSImg_es from '../images/es/archivos-05.png'
import IOSImg_en  from '../images/en/archivos-05.png'

import Mockup_es from '../images/es/home.png'
import Mockup_en from '../images/en/home.png'

import styled from 'styled-components'
import InfoCollection from '../Components/Inicio/infoColection'

import { Animated } from 'react-animated-css'
import Options from '../Components/Options'
import Download from '../Components/Download'
import FanMap from '../Components/Inicio/FanMap'
import Modal from '../Components/Modal'
import Video from '../Components/Video/Video'
import {useTranslation} from "react-i18next";


const  Inicio = () => {

    const [modal, setModal] = useState(false);
    const [t, i18n] = useTranslation('common');

    const showModal = () => {
        setModal(!modal)
    }

    var image  =  i18n.language ==='es' ? Mockup_es : Mockup_en

    var AndroidImg  =  i18n.language ==='es' ? AndroidImg_es : AndroidImg_en

    var IOSImg  =  i18n.language ==='es' ? IOSImg_es : IOSImg_en

    return (
        <div className='boar'>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Modal show={modal}  close={showModal}>
                <Video show={modal}/>
            </Modal>
            <DivHome>
                <Animated animationIn="fadeInUp" animationOut="flipOutX" animationInDuration={600} animationOutDuration={400} isVisible={true}>

                <div className='content'>
                    <div className='title'>
                        <h1 className='line1'>{t('home.start.line1')}</h1>
                        <h1 className='line2'>{t('home.start.line2')}</h1>
                        <h1 className='line4'>{t('home.start.line3')}</h1>
                        <h1 className='line3'>{t('home.start.line4')}<br/>{t('home.start.line5')}</h1>
                        <h1 className='line4'>{t('home.start.line6')}</h1>
                        <div className="buttons">
                          <a target="_blank" rel="noopener noreferrer"  href="https://apps.apple.com/ar/app/vinimay/id1506565366"><img src={IOSImg} alt='Mockup' className='Ios'/></a>
                          <a target="_blank" rel="noopener noreferrer"  href="https://play.google.com/store/apps/details?id=com.vinimay.app"><img src={AndroidImg} alt='Mockup' className='android'/></a>
                        </div>
                    </div>

                    <div className='bannerImg'>
                     <img src={image} alt='Mockup' className='ImgMoc'/>

                    </div>
                </div>
                </Animated>
            </DivHome>
            <InfoCollection i18n={i18n} translate={t} show={showModal}/>
            <Options translate={t}  />
            <FanMap translate={t} i18n={i18n}/>
            <Download translate={t} i18n={i18n}/>
        </div>
    )
}


const DivHome = styled.div`
    margin:0;
    padding: auto;
    align-content:center;
    display: block;
    align-items: center;
    width: 100%;
    height: auto;
    min-height: 100vh;
    background-image: url(${Nov});
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;



    .line1{
        font-size: 55px;
        -webkit-text-fill-color:  #171E36; /* Will override color (regardless of order) */
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: white;
        color: #171E36;
        margin:0;
    }
    .line4{
        font-size: 45px;
        -webkit-text-fill-color:  #171E36; /* Will override color (regardless of order) */
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: white;
        color: #171E36;
        margin:0;
    }
    .line2{
        font-size:45px;
        color: white;
        margin:0;
    }
    .line3{
        font-size: 55px;
        color:#A8C813;
        margin:10px;
    }

    .content{
        font-family: 'Montserrat', sans-serif!important;
        /* font-style: italic; */
        padding-top:3rem;
        display:flex;
        text-align: center;
        align-content: center;
        align-items: center;
    }

    .title{
        flex:1;
        text-align: center;
        align-content: center;
        padding: 1rem 10rem;
    }

    .bannerImg{
        flex: 1;
    }

    .ImgMoc{
        padding-top:5rem;
        filter: drop-shadow(6px 16px 35px rgba(0, 0, 0, .5));
    }

    .buttons{
        display: flex;
        text-align: center;
        align-content: center;
        align-items: center;
        justify-content: space-around;
    }

    .android{
        height: 80px;
    }

    .Ios{
        height:80px;
    }

    @media screen and (max-width: 768px){
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        display: inline-block;
        flex: block;

        .boar{
            /* padding-top: 0; */
            display: block;
            padding-top: 5px;
        }

        .content{
            /* height: 669px; */
            /* margin-right: 50px; */
            /* text-align: center; */
            padding-top:8rem;
            display:block;
        }

        .title{
            padding:0;
        }

        .ImgMoc{
            display: none;
        }

        .line1{
            font-size: 40px;
            -webkit-text-fill-color:  #171E36; /* Will override color (regardless of order) */
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: white;
            color: #171E36;
        }
        .line4{
            font-size: 30px;
            -webkit-text-fill-color:  #171E36; /* Will override color (regardless of order) */
            -webkit-text-stroke-width: 1px;
            -webkit-text-stroke-color: white;
            color: #171E36;
        }
        .line2{
            font-size:30px;
            color: white;
        }
        .line3{
            font-size: 35px;
            color:#A8C813;
        }

        .buttons{
            display:block;
        }

        .android{
            height: 70px;
        }
        .Ios{
            height: 70px;
        }

    }
`;
export default Inicio;