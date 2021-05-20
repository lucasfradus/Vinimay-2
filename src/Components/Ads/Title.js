import React from 'react'
import styled from 'styled-components'

export default function Titles(props) {
    return (
        <Title id="top">
            <p className='line3'>Publicita en Vinimay</p>
            <p className='line2'>Completa el siguiente formuario y nos pondremos en contacto a la brevedad</p>
        </Title>
    )
}

const Title = styled.div`
    display: block;
    text-align:center;
    padding: 1rem 0rem 1rem;


    .line3{
        font-size: 40px;
        color:#A8C813;
        font-weight: 900 !important;
        font-style: italic;
    }
    .line2{
      font-size: 35px;
      color:#171E36;
      padding: 0;
      margin:0;
      margin-bottom:2rem;
      font-weight: 900 !important;
      font-style: italic;
    }
`
