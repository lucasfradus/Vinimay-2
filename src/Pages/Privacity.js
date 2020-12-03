import React from 'react'
import styled from 'styled-components'
import Box from '../Components/box'
import {useTranslation} from "react-i18next";

export default function Privacity() {
    const [t] = useTranslation('common');

    return (
        <COntinaer>
            <Box/>
            <div className='conte'>
                <h1 className='title'>{t('Privacy.title')}</h1>
                <div className='divider'></div>
                <h1 className='subtitle'>{t('Privacy.subtitle')}</h1>
                <p className='text'>{t('Privacy.general')}</p>

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
               
               
                <p className='subTitle2'>{t('Terms.point6a')}</p>
                <p className='text'>{t('Terms.point6b')}</p>
               
                <p className='subTitle2'>{t('Terms.point7a')}</p>
                <p className='text'>{t('Terms.point7b')}</p>
               
                <p className='subTitle2'>{t('Terms.point8a')}</p>
                <p className='text'>{t('Terms.point8b')}</p>
               
                <p className='subTitle2'>{t('Terms.point9a')}</p>
                <p className='text'>{t('Terms.point9b')}</p>
               
                <p className='subTitle2'>{t('Terms.point10a')}</p>
                <p className='text'>{t('Terms.point10b')}</p>
               
                <p className='subTitle2'>{t('Terms.point11a')}</p>
                <p className='text'>{t('Terms.point11b')}</p>
               
                <p className='subTitle2'>{t('Terms.point12a')}</p>
                <p className='text'>{t('Terms.point12b')}</p>

                <p className='text'>{t('Terms.date')}</p>

               

            </div>
        </COntinaer>
    )
}

const COntinaer = styled.div`
    text-align: left;

    .conte{
        padding: 2rem 6rem;
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
