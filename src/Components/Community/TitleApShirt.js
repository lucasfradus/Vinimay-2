import React from 'react'
import styled from 'styled-components'

export default function TitleApShirt(props) {
    return (
        <Contain>
            <h1 className='shirt'>{props.translate('comunity.TitleApShirt.line1')}</h1>
            <h1 className='app'>{props.translate('comunity.TitleApShirt.line2')}</h1>
        </Contain>
    )
}

const Contain = styled.div`
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left:  20rem;
    text-align: left;
    background: radial-gradient(circle farthest-side,#2A355A,#090C17);

    .shirt{
        color:#fff;
        margin:0;
    }
    .app{
        color:#A8C813;
        margin:0;
    }

    @media screen and (max-width: 769px){
        padding-left: 1rem;

        .shirt{
            font-size: 20px;
            color:#fff;
            margin:0;
        }
        .app{
            font-size: 20px;
            color:#A8C813;
            margin:0;
        }

    }
`
