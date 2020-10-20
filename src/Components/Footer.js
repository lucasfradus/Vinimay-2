import React from 'react'
//antiguo manejador de rutas
//import { Links } from 'react-router-dom'

import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link';


export default function Footer() {
    return (
        <Foote className='footer-parent'>
            <div className='footer'>
                <div className='legal'>
                    <h1>LEGAL</h1>
                    <ul className='navLink'>
                        <li>
                            <Link target="_blank" to='/condiciones'>Condiciones de servicio</Link>
                        </li>
                        <li>
                            <Link target="_blank" to='/privacidad'>Política de privacidad</Link>
                        </li>
                        <li>
                            <Link to='/contacto#top'>Denunciar una infracción</Link>
                        </li>
                    </ul>


                    <p></p>
                </div>
                <div className='pab'>
                    <h1>PUBLICIDAD</h1>
                    <ul className='navLink'>
                        <li>
                            <Link to='/'>Comprar anuncios</Link>
                        </li>
                        <li>
                            <Link to='/'>Normas de publicidad</Link>
                        </li>
                        <li>
                            <Link to='/'>Pautas de la marca</Link>
                        </li>
                    </ul>
                </div>
                <div className='pab'>
                    <h1>COMUNIDAD</h1>
                    <ul className='navLink'>
                        <li>
                            <Link to='/comunidad#faq'>Preguntas frecuentes</Link>

                        </li>
                    </ul>
                    <p></p>
                </div>
            </div>


        </Foote>
    )
}


const Foote = styled.div`
    background-color: #A8C813;
    padding: 1rem 2rem;
    h1{
        color: #fff;
        margin-left: 40px;
    }

    .footer {
        display: flex;
        justify-content: space-between;
    }

    .legal {
        color: #fff;
        flex:1;
        display:block;
        text-align:left;
        padding-left: 30px;
        text-decoration: none;
        /* padding-right: 0px; */
        outline: none;
    }


    .navLink {
        text-decoration: none;
        list-style-type: none;
        background: transparent;
        margin: 0;
        color: #fff;

    }

    li{
        margin-bottom: 20px;

    }

    .navLink a{
        text-decoration: none;
        color: #fff;
        list-style-type: none;
        background: transparent;

        &:hover{
        list-style-type: none;
            display:block;
            color: #000;
                border: none;
                cursor: pointer;
                outline: none;
                background: transparent;
        }

    }
    .pab{
        flex:1;
        display:block;
        text-align:left;
        color:#fff;
        padding-left: 30px;
    }

    @media screen and (max-width: 760px){
        display:block;
        margin: 0;
        padding: 1rem 2rem;
    }
`
