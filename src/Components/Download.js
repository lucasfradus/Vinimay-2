import React from 'react'
import styled from 'styled-components'

import Ios from '../images/archivos-07.png'
import Android from '../images/archivos-08.png'

export default function Download(props) {
    return (
        <Down>
            <h1 className='line3'>{props.translate('home.download.line1')}</h1>
            <p className='line2 line-bajate-app'>{props.translate('home.download.line2')}</p>
            <div>
                <a target="_blank" rel="noopener noreferrer"  href="https://apps.apple.com/ar/app/vinimay/id1506565366"><img src={Ios} alt='com' className='ImgD'/></a>
                <img src={Android} alt='com' className='ImgD'/>
            </div>
        </Down>
    )
}

const Down = styled.div`
    display: block;
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
