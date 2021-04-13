import React from 'react'
import DownCom from '../Components/Community/DownCom'

import Box from '../Components/box'
import {useTranslation} from "react-i18next";
import Questions from '../Components/Faq/Questions'
import { Helmet } from 'react-helmet';



    const Faq = () => {
        const [t] = useTranslation('common');

        return (
            <div className="page-comunidad">
                <Helmet>
                    <title>Preguntas Frecuentes</title>
                </Helmet>
                <Box/>
                <Questions translate={t} />
                <DownCom translate={t}/>

            </div>
        )
    }
   

export default Faq;