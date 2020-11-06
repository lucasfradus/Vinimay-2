import React, {useState}  from 'react'
import Nov from '../images/archivos-17.jpg'
//import Mockup from '../images/mockup-banner.png'
import Mockup from '../images/mockups/mockup-banner.png'

import AndroidImg from '../images/archivos-06.png'

import IOSImg from '../images/archivos-05.png'
import styled from 'styled-components'
import InfoCollection from '../Components/Inicio/infoColection'

import { Animated } from 'react-animated-css'
import Options from '../Components/Options'
import Download from '../Components/Download'
import FanMap from '../Components/Inicio/FanMap'
import Modal from '../Components/Modal'
import Video from '../Components/Video/Video'

export default function Inicio() {

    const [modal, setModal] = useState(false);

    const showModal = () => {
        setModal(!modal)
    }

    return (
        <div className='boar'>
            <Modal show={modal}  close={showModal}>
                <Video show={modal}/>
            </Modal>
            <DivHome>
                <Animated animationIn="fadeInUp" animationOut="flipOutX" animationInDuration={600} animationOutDuration={400} isVisible={true}>

                <div className='content'>
                    <div className='title'>
                        <h1 className='line1'>EL PRIMER</h1>
                        <h1 className='line2'>MUSEO DIGITAL</h1>
                        <h1 className='line1'>DE</h1>
                        <h1 className='line3'>CAMISETAS DE<br/>FÚTBOL OFICIALES</h1>
                        <h1 className='line4'>¡BAJATE LA APP!</h1>
                        <div className="buttons">
                          <a target="_blank" rel="noopener noreferrer"  href="https://apps.apple.com/ar/app/vinimay/id1506565366"><img src={IOSImg} alt='Mockup' className='Ios'/></a>
                            <img src={AndroidImg} alt='Mockup' className='android'/>
                        </div>
                    </div>

                    <div className='bannerImg'>
                        <img src={Mockup} alt='Mockup' className='ImgMoc'/>
                    </div>
                </div>
                </Animated>
            </DivHome>
            <InfoCollection show={showModal}/>
            <Options/>
            <FanMap/>
            <Download/>
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
`
