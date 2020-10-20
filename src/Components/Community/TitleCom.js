import React from 'react'
import styled from 'styled-components'

export default function TitleCom() {
    return (
        <Title>
            <p className='line1'>AGOSTO 2020</p>
            <h1 className='line3'>LAS MEJORES CAMISETAS</h1>
            <p className='line2'>DE NUESTRA COMUNIDAD</p>
        </Title>
    )
}

const Title = styled.div`

    display: block;
    padding: 1rem 3rem;
    text-align: left;

    .line1{
        font-size: 30px;
        -webkit-text-fill-color:  white; /* Will override color (regardless of order) */
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: #171E36 ;
        color: #171E36;
        margin:0;
    }
    
    .line3{
        font-size: 35px;
        color:#A8C813;
        margin:0;
    }
    .line2{
        font-size: 35px;
        color:#171E36;
        padding: 0;
        margin:0;
    }

    @media screen and (max-width: 769px){
        padding: 1rem 2rem;


        .line1{
        font-size: 20px;
        -webkit-text-fill-color:  white; /* Will override color (regardless of order) */
        -webkit-text-stroke-width: 2px;
        -webkit-text-stroke-color: #171E36 ;
        color: #171E36;
        margin:0;
    }
    
    .line3{
        font-size: 25px;
        color:#A8C813;
        margin:0;
    }
    .line2{
        font-size: 25px;
        color:#171E36;
        padding: 0;
        margin:0;
    }
    }
`