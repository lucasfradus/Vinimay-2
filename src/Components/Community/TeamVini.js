import React from 'react'
import styled from 'styled-components'
import Tem from '../../images/archivos-17.jpg'
import Log from '../../images/logo-sin-camiseta.png'

import CardTeam from './CardTeam'

import Equipo1 from '../../images/team/tomas.png'
import Equipo2 from '../../images/team/gabi.png'
import Equipo3 from '../../images/team/martin.png'
import Equipo4 from '../../images/team/kalu.png'
import Equipo5 from '../../images/team/juan_ignacio.png'
import Equipo6 from '../../images/team/benjamin.png'
import Equipo7 from '../../images/team/vicky.png'

import flecha1 from '../../images/team/flecha-1.png'
import flecha2 from '../../images/team/flecha-2.png'
import flecha3 from '../../images/team/flecha-3.png'
import flecha4 from '../../images/team/flecha-4.png'
import flecha5 from '../../images/team/flecha-5.png'



export default function TeamVini() {
    return (
        <Team className="equipo-container">
            <h1 className='line1'>Equipo</h1>
            <img src={Log} alt='ime' className='ImgM'/>
            <br/>
            <br/>
            <div className='lista'>
                <CardTeam imagen={Equipo2} nombre="Gabriel" apellido="Benito" posicion="CEO-Founder" flecha_numero={1} flecha={flecha1} />
                <CardTeam imagen={Equipo1} nombre="Tomás" apellido="Moyano" posicion="Responsable de producto" flecha_numero={4} flecha={flecha4} />
                <CardTeam imagen={Equipo5} nombre="Ignacio" apellido="Benito" posicion="Desarrollo" flecha_numero={3} flecha={flecha3} />
                <CardTeam imagen={Equipo7} nombre="Victoria" apellido="Flores" posicion="Marketing y diseño" flecha_numero={5} flecha={flecha5} />
                <CardTeam imagen={Equipo6} nombre="Benjamin" apellido="Buchanan" posicion="Finanzas" flecha_numero={1} flecha={flecha1} />
                <CardTeam imagen={Equipo3} nombre="Martin" apellido="Benito" posicion="Satisfacción al cliente" flecha_numero={2} flecha={flecha2} />
                <CardTeam imagen={Equipo4} nombre="KULWINDERJIT" apellido="Singh" posicion="Programacion" />
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
    /* heigh]t: 100vh; */
    background-image: url(${Tem});
    background-attachment: fixed;
    background-size: cover;

    .line1{
        margin-top: 10px;
        padding-top: 10px;
        color:#A8C813;
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
