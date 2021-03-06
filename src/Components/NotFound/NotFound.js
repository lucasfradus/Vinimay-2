import React from 'react'
import styled from 'styled-components'

export default function Form(props) {


    return (
        <Title>
            <div className='for'>
              <p className='line3'>{props.translate('notFound.ups')}!</p>
              <p className='line2'>{props.translate('notFound.ln1')}</p>
            </div>
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
