import React from 'react'
import styled from 'styled-components'

export default function Questions(props) {



    return (
        <Querys className='preguntas-container' id={'faq'}>
            <h1 className='line1'>
                Tenes dudas? o consultas acerca del uso de la app?
            </h1>
            <a  className='line2' href="/faq">
                    <h1>
                        Sacatelas acá
                    </h1>
            </a>

           
            
        </Querys>
    )
}

const Querys = styled.div`
    justify-content: center;
    align-items: center;
    align-self: center;
    padding: 2rem 25rem;


    .list{
        width:40rem;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: auto;
    }
    .line1{
        color:#A8C813;
    }
    .line2{
        color:#171E36;
        text-decoration:none;
        transition: all ease 0.3s;
    }
    .line2:hover{
        color:#A8C813;
    }

    @media screen and (max-width: 769px){
        padding: 0rem 2rem;
        .list{
            width: 17rem;
        }
    }

`
