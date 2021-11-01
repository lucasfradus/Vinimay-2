import React from 'react'
import styled from 'styled-components'
import Nov from '../../images/archivos-18.jpg'
import Log from '../../images/logo-sin-camiseta.png'

import CardTeam from './CardTeam'

import Equipo1 from '../../images/team/tomas.png'
import Equipo2 from '../../images/team/gabi.png'
import Equipo3 from '../../images/team/segundo.png'
import Equipo4 from '../../images/team/mateo.png'
import Equipo5 from '../../images/team/juan_ignacio.png'
import Equipo6 from '../../images/team/leandro.png'
import Equipo8 from '../../images/team/santi.png'

import Equipo7 from '../../images/team/vicky.png'

import flecha1 from '../../images/team/flecha-1.png'
import flecha2 from '../../images/team/flecha-2.png'
import flecha3 from '../../images/team/flecha-3.png'
import flecha4 from '../../images/team/flecha-4.png'
import flecha5 from '../../images/team/flecha-5.png'



export default function TeamVini(props) {
    return (
        <Team className="equipo-container">
            <h1 className='line1'>Equipo</h1>
            <img src={Log} alt='ime' className='ImgM'/>
            <br/>
            <br/>
            <div className='lista'>
                <CardTeam imagen={Equipo2} nombre="Gabriel" apellido="Benito" posicion={props.translate('comunity.TeamVini.ceo')} flecha_numero={1} flecha={flecha1} />
                <CardTeam imagen={Equipo1} nombre="Tomás" apellido="Moyano" posicion={props.translate('comunity.TeamVini.product')} flecha_numero={4} flecha={flecha4} />
                <CardTeam imagen={Equipo5} nombre="Ignacio" apellido="Benito" posicion={props.translate('comunity.TeamVini.dev')} flecha_numero={3} flecha={flecha3} />
                <CardTeam imagen={Equipo7} nombre="Victoria" apellido="Flores" posicion={props.translate('comunity.TeamVini.design')} flecha_numero={5} flecha={flecha5} />
                <CardTeam imagen={Equipo8} nombre="Santiago" apellido="García Marra" posicion={props.translate('comunity.TeamVini.mkt')}  />
                <CardTeam imagen={Equipo6} nombre="Leandro" apellido="Cerrella" posicion={props.translate('comunity.TeamVini.social')} />
                <CardTeam imagen={Equipo3} nombre="Segundo" apellido="Bourdieu" posicion={props.translate('comunity.TeamVini.customer')} flecha_numero={2} flecha={flecha2} />
                <CardTeam imagen={Equipo4} nombre="Mateo" apellido="Bourdieu" posicion={props.translate('comunity.TeamVini.cfo')} />
            </div>
        </Team>
    )
}


const Team = styled.div`
  
        margin:0;
        padding: auto;
        align-content:center;
        display: block;
        align-items: center;
        width: 100%;
        /* height: 70vh; */
        background-image: linear-gradient(to bottom, rgba(168, 200, 19, 0.7),#A8C813), url(${Nov});
        background-attachment: fixed;
        background-size: cover;


    .line1{
        margin-top: 10px;
        padding-top: 10px;
        color:#171e36;
        font-size: 30px;
    }

    .ImgM{
        height: 3rem;
        margin-top: 0px;
    }

    .lista{
        display: flex;
        flex-wrap: wrap;
        padding: 0rem 10rem;
        justify-content: center;

    }

    @media screen and (max-width: 769px){
        .lista{
            padding: 0;
        }
    }
`
