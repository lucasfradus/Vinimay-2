import React from 'react'
import styled from 'styled-components'
import Box from '../Components/box'
import {useTranslation} from "react-i18next";
import Questions from '../Components/Faq/Questions'
import { Helmet } from 'react-helmet';

export default function Privacity() {
    const [t] = useTranslation('common');

    return (
        <COntinaer>
               <Helmet>
                <title>Preguntas Frecuentes</title>
            </Helmet>
            <Box/>
            <div className='conte'>
                    <Questions translate={t} />
               

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
