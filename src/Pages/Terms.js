import React from 'react'
import styled from 'styled-components'
import Box from '../Components/box'
import {useTranslation} from "react-i18next";
import { Helmet } from 'react-helmet';

export default function Terms() {
    const [t] = useTranslation('common');

    return (
        <COntinaer>
                 <Helmet>
                <title>Terminos y Condiciones</title>
            </Helmet>
            <Box/>
            <div className='conte'>
                <h1 className='title'>{t('Terms.title')}</h1>
                <div className='divider'></div>
                <h1 className='subtitle'>{t('Terms.subtitle')}</h1>
                <p className='text'>{t('Terms.general')}</p>

                <p className='subTitle2'>{t('Terms.point1a')}</p>
                <p className='text'>{t('Terms.point1b')}</p>

                <p className='subTitle2'>{t('Terms.point2a')}</p>
                <p className='text'>{t('Terms.point2b')}</p>

                <p className='subTitle2'>{t('Terms.point3a')}</p>
                <p className='text'>{t('Terms.point3b')}</p>

                <p className='subTitle2'>{t('Terms.point4a')}</p>
                <p className='text'>{t('Terms.point4b')}</p>
               
                <p className='subTitle2'>{t('Terms.point5a')}</p>
                <p className='text'>{t('Terms.point5b')}</p>
               
                <p className='subTitle2'>{t('Terms.point5a')}</p>
                <p className='text'>{t('Terms.point5b')}</p>
               
                <p className='subTitle2'>{t('Terms.point6a')}</p>
                <p className='text'>{t('Terms.point6b')}</p>
               
                <p className='subTitle2'>{t('Terms.point7a')}</p>
                <p className='text'>{t('Terms.point7b')}</p>
               
                <p className='subTitle2'>{t('Terms.point8a')}</p>
                <p className='text'>{t('Terms.point8b')}</p>
               
                <p className='subTitle2'>{t('Terms.point9a')}</p>
                <p className='text'>{t('Terms.point9b')}</p>
               
               
                <p className='subTitle2'>{t('Terms.point91a')}</p>
                <p className='text'>{t('Terms.point91b')}</p>

                <p className='subTitle2'>{t('Terms.point10a')}</p>
                <p className='text'>{t('Terms.point10b')}</p>
               
                <p className='subTitle2'>{t('Terms.point11a')}</p>
                <p className='text'>{t('Terms.point11b')}</p>
               
                <p className='subTitle2'>{t('Terms.point12a')}</p>
                <p className='text'>{t('Terms.point12b')}</p>

                <p className='subTitle2'>{t('Terms.point13a')}</p>
                <p className='text'>{t('Terms.point13b')}</p>
               
                <p className='subTitle2'>{t('Terms.point14a')}</p>
                <p className='text'>{t('Terms.point14b')}</p>
               
                <p className='subTitle2'>{t('Terms.point15a')}</p>
                <p className='text'>{t('Terms.point15b')}</p>

                <p className='subTitle2'>{t('Terms.point16a')}</p>
                <p className='text'>{t('Terms.point16b')}</p>

                <p className='subTitle2'>{t('Terms.point17a')}</p>
                <p className='text'>{t('Terms.point17b')}</p>
               
                <p className='subTitle2'>{t('Terms.point18a')}</p>
                <p className='text'>{t('Terms.point18b')}</p>
               
                <p className='subTitle2'>{t('Terms.point19a')}</p>
                <p className='text'>{t('Terms.point19b')}</p>
             
                <p className='text'>{t('Terms.date')}</p>


                  
                  

            </div>
        </COntinaer>
    )
}

const COntinaer = styled.div`

text-align: left;


/* MOBILE */
  @media (max-width: 768px) {
    .conte{
        padding: 2rem 2rem;
    }
  }


  @media (min-width: 768px) {
    .conte{
        padding: 2rem 6rem;
    }
  }
    

    .title{
        color:#171E36;
    }
    .subtitle{
        color:#A8C813;
    }
    .subTitle2{
        color: rgba(0,0,0, 0.9);
        font-size:22px;
        font-weigth:bold;
        font-style:italic;
    }

    .text{
        color: rgba(0,0,0, 0.7);
    }

    .divider{
        background-color: rgba(0,0,0, 0.7);
        height: 2px;
    }
`
