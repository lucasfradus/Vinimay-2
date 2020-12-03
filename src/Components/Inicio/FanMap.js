import React from 'react'
import styled from 'styled-components'



import Mocku1_es from '../../images/es/mockups_03.png'
import Mocku2_es from '../../images/es/mockups_04.png'

import Mocku1_en from '../../images/en/mockups_03.png'
import Mocku2_en from '../../images/en/mockups_04.png'


import Map from '../../images/mockups_20.png'




export default function FanMap(props) {

var Mocku1  =  props.i18n.language ==='es' ? Mocku1_es : Mocku1_en
var Mocku2  =  props.i18n.language ==='es' ? Mocku2_es : Mocku2_en

    return (
        <Fanat className='fanMap'> 
            <h1 className='line3'>{props.translate('home.fanmap.line1')}</h1>
            <p className='line2'>{props.translate('home.fanmap.line2')} </p>
            <div className='maped row'>
                <img src={Mocku1} alt='Co' className='ImgR'/>
                <img src={Map} alt='Co' className='ImgM'/>
                <img src={Mocku2} alt='Co' className='ImgR'/>
            </div>
        </Fanat>
    )
}


const Fanat = styled.div`
    display: block;
    width: 100%;
    .line4{
            font-size: 20px;
            color:#A8C813;
        }
    .line3{
            font-size: 35px;
            color:#A8C813;
        }
        .line2{
            font-size: 25px;
            color:#171E36;
            padding: 0;
            margin:0;
        }

    .maped{
        // justify-content: space-between;
    }

    .ImgR{
        height: 35em;
    }
    .ImgM{
        height: 30em;
    }

    @media screen and (max-width: 769px){

        .line4{
            font-size: 14px;
            color:#A8C813;
        }
        .line3{
                font-size: 25px;
                color:#A8C813;
            }
            .line2{
                font-size: 20px;
                color:#171E36;
                padding: 0;
                margin:0;
            }
        .ImgR{
            display:none;
        }
        .ImgM{
            height: 9em;
        }
    }

    @media screen and (max-width: 950px){
        .ImgR{
            display:none;
        }
        .ImgM{
            height: 9em;
        }
    }


`
