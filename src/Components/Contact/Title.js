import React from 'react'
import styled from 'styled-components'

export default function Titles() {
    return (
        <Title id="top">
            <p className='line3'>DEJANOS TU MENSAJE</p>
            <p className='line2'>¡ESTE EQUIPO LO FORMAMOS ENTRE TODOS!</p>
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
