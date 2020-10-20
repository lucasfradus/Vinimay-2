import React from 'react'
import styled from 'styled-components'

export default function CardTop(props) {
    return (
        <Contain className='cardItem'>
            <div className='carTop'>
                <h1 className='name'>VICTORIA FLORES</h1>
                <h1 className='shir'>CANTIDAD DE CAMISETAS</h1>
                <h1 className='counter'>200</h1>
                <h1 className='us'>USUARIO VINIMAY</h1>
                <h1 className='usname'>VICTORIA FLORES</h1>
            </div>
            <div className='carBot'>
                <h1>{props.number}</h1>
            </div>
        </Contain>
    )
}

const Contain = styled.div`

    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    flex: 1;

    margin: 10px 8px;
    
    .carTop{
        /* height: 18rem; */
        width: 15rem;
        background: #fff;
        border-radius: 10px;
        padding: 1rem 1rem;
    }

    .name{
        color:#171E36;
        font-size: 30px;
        margin:0;
    }
    .shir{
        color:#A8C813;
        font-size: 15px;
        margin:0;
    }
    .counter{
        color:#A8C813;
        font-size: 45px;
        /* margin:0; */
    }
    .us{
        color:#A8C813;
        font-size: 16px;
        margin:0;
    }
    .usname{
        color:#A8C813;
        font-size: 23px;
        margin:0;
    }

    .carBot{
        width: 19rem;
        background-color:#171E36;
    }
    .carBot h1{
        color: #fff;
        font-size: 80px;
        margin:0;
        background-color:#171E36;
    }

    @media screen and (max-width: 769px){
        margin: 30px 8px;
        .carTop{
        /* height: 18rem; */
            width: 14rem;
            background: #fff;
            border-radius: 10px;
            padding: 1rem 1rem;
        }
        .carBot{
            width: 16rem;
            background-color:#171E36;
        }
        .carBot h1{
            color: #fff;
            font-size: 80px;
            margin:0;
            background-color:#171E36;
        }
    }
`