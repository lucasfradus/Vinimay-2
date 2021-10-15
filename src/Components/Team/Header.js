import React from 'react';
import styled from 'styled-components'
import background from '../../images/archivos-17.jpg';


const Header = () => {

    return (
        <Container>
            <div className="title">
                Nuestra Historia
            </div>
            <div className="body">
                <strong>Vinimay App</strong> nace en Septiembre del 2019 cuando <strong>Gabriel</strong> quería mostrar y contar a todo el mundo
                su <strong>pasión por las camisetas de fútbol</strong> y pensó que la mejor idea era desarrollar una plataforma digital con alcance mundial para que tod@s
                los coleccionistas profesionales y apasionados puedan<strong> exhibir, comprar, vender o intercambiar</strong> sus camisetas oficiales.
                Hoy en día <strong>Vini</strong> esta ayudando a miles de fanáticos de todo el mundo.
            </div>
            <div className="bottom">
                ¿Ya sos parte de vinimay?
            </div>
        </Container>
    );


}


const Container = styled.div`
        height:70vh;
        display:flex;
        align-items:center;
        justify-content:center;
        text-align:center;
        flex-direction:column;
        background-image: url(${background});
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;

        .title{
            font-size: 3em;
            text-transform:uppercase;
            letter-spacing:2px;
            color:#A8C813;
            font-weight:600;
            text-shadow: #000 1px 0 10px;
            padding:2rem;
        }
        .body{
            color: white;
            font-size: 2em;
            font-family: "FSJoey";
            line-height:1.125em;
            padding:2rem;
            text-align:center;
            letter-spacing: 1px;
            /* Arriba | Derecha | Abajo | Izquierda */
            margin: 0 4em 0 4em;
        }

        .bottom{
            font-size: 2em;
            text-transform:uppercase;
            letter-spacing:2px;
            color:#A8C813;
            font-weight:600;
            text-shadow: #000 1px 0 10px;
            padding:2rem;
        }


        @media screen and (max-width: 769px){
            height:auto;
            .body{
                margin: 0;
            }
        }

    `

export default Header;