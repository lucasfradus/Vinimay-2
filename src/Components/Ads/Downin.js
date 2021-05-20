import React from 'react'
import styled from 'styled-components'

import Ios_en from '../../images/en/archivos-07.png'
import Ios_es from '../../images/es/archivos-07.png'

import Android_es from '../../images/es/archivos-08.png'
import Android_en from '../../images/en/archivos-08.png'

export default function Downin(props) {

    var Ios  =  props.i18n.language ==='es' ? Ios_es : Ios_en
    var Android  =  props.i18n.language ==='es' ? Android_es : Android_en

    return (
        <Dw>
            <p className='line2 line-bajate-app' id={'download'}>{props.translate('Contact-form.downme.down')} </p>
            <div>
                <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/ar/app/vinimay/id1506565366"><img src={Ios} alt='com' className='ImgD'/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=com.vinimay.app"><img src={Android} alt='com' className='ImgD'/></a>
                
            </div>
        </Dw>
    )
}


const Dw = styled.div`
padding: 1rem 0rem;

.line3{
        font-size: 35px;
        color:#A8C813;
    }
    .line2{
        font-size: 35px;
        color:#171E36;
        padding: 0;
        margin:0;

    }

    .ImgD{
        height: 6rem;
    }

    @media screen and (max-width: 769px){
        .line3{
            font-size: 25px;
            color:#A8C813;
        }
        .line2{
            font-size: 25px;
            color:#171E36;
            padding: 0;
            margin:0;
        }

        .ImgD{
            height: 4rem;
        }
    }
`
