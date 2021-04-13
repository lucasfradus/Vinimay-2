import React from 'react'
import styled from 'styled-components'

export default function CardTeam(props) {
    return (
        <Cardi className='card-team'>
            <img src={props.flecha} alt="" data-flecha_numero={props.flecha_numero} className="flecha"/>
            <img src={props.imagen} alt='profile' className='ImgP'/>
            <h2 className='name'>{props.nombre}</h2>
            <h2 className='last'>{props.apellido}</h2>
            <h2 className='pos'>{props.posicion}</h2>
        </Cardi>
    )
}

const Cardi = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px;

    .ImgP{
        height: 17rem;
        border-radius: 10px;
        background-color:white;
        width:240px;
    }

    .name{
        color: #fff;
        font-size: 30px;
        margin:0;
    }
    .last{
        color: #fff;
        font-size: 20px;
        margin:0;
    }
    .pos{
        color:#171e36;
        font-size: 20px;
        margin:0;
    }

`
