import React from 'react'
import styled from 'styled-components'
import Box from '../Components/box'
import { useTranslation } from "react-i18next";
import { Helmet } from 'react-helmet';

export default function Privacity() {
    const [t] = useTranslation('common');

    return (
        <COntinaer>
            <Helmet>
                <title>Politica de Privacidad</title>
            </Helmet>
            <Box />
            <div className='conte'>
                <h1 className='title'>{t('Privacy.title')}</h1>
                <div className='divider'></div>
                <h1 className='subtitle'>{t('Privacy.subtitle')}</h1>
                <p className='text'>{t('Privacy.general')}</p>

                <p className='subTitle2'>{t('Privacy.point1a')}</p>
                <p className='text'>{t('Privacy.point1b')}</p>

                <p className='subTitle2'>{t('Privacy.point2a')}</p>
                <p className='text'>{t('Privacy.point2b')}</p>

                <p className='subTitle2'>{t('Privacy.point3a')}</p>
                <p className='text'>{t('Privacy.point3b')}</p>

                <p className='subTitle2'>{t('Privacy.point4a')}</p>
                <p className='text'>{t('Privacy.point4b')}</p>

                <p className='subTitle2'>{t('Privacy.point5a')}</p>
                <p className='text'>{t('Privacy.point5b')}</p>


                <p className='subTitle2'>{t('Privacy.point6a')}</p>
                <p className='text'>{t('Privacy.point6b')}</p>

                <p className='subTitle2'>{t('Privacy.point7a')}</p>
                <p className='text'>{t('Privacy.point7b')}</p>

                <p className='subTitle2'>{t('Privacy.point7c')}</p>
                <p className='text'>{t('Privacy.point7d')}</p>

                <p className='subTitle2'>{t('Privacy.point8a')}</p>
                <p className='text'>{t('Privacy.point8b')}</p>

                <p className='subTitle2'>{t('Privacy.point9a')}</p>
                <p className='text'>{t('Privacy.point9b')}</p>

                <p className='subTitle2'>{t('Privacy.point10a')}</p>
                <p className='text'>{t('Privacy.point10b')}</p>

                <p className='subTitle2'>{t('Privacy.point11a')}</p>
                <p className='text'>{t('Privacy.point11b')}</p>

                <p className='subTitle2'>{t('Privacy.point12a')}</p>
                <p className='text'>{t('Privacy.point12b')}</p>

                <p className='text'>{t('Privacy.date')}</p>



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
