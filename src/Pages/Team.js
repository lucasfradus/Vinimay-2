import React from 'react'
import {useTranslation} from "react-i18next";
import { Helmet } from 'react-helmet';
import Box from '../Components/box'
import DownCom from '../Components/Community/DownCom'
import Header from '../Components/Team/Header'
import TeamVini from '../Components/Team/TeamVini'

const Team = () => {
    const [t] = useTranslation('common');
    
    return (
        <div className="page-comunidad">

            <Helmet>
                <title>Equipo</title>
            </Helmet>
            <Box/>
            <Header translate={t}/>
            <TeamVini translate={t}/>
            <DownCom translate={t}/>

         </div>
    );


    }


    export default Team;