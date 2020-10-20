import React from 'react'
import styled from 'styled-components'

export default function ButtomTitle() {
    return (
        <Contain>
            <h1 className='shirt title-fanaticos-10'>¿QUIÉNES VAN A SER LOS PROXIMOS FANÁTICOS EN EL TOP 10?</h1>
        </Contain>
    )
}

const Contain = styled.div`

    padding-top: 2rem;
    padding-bottom: 2rem;
    text-align: center;
    background: radial-gradient(circle farthest-side,#2A355A,#090C17);

    .shirt{
        color:#fff;
        margin:0;
    }

    @media screen and (max-width: 769px){
        padding-left: 1rem;

        .shirt{
            font-size: 20px;
            color:#fff;
            margin:0;
        }

    }
`