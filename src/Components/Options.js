import React from 'react'
import styled from 'styled-components'
import Exibe from '../images/archivos-01.png'
import Inter from '../images/archivos-02.png'
import Vend from '../images/archivos-03.png'

export default function Options(props) {
    return (
        <Optione className="Opts-Container">
            <h1>{props.translate('home.options.line1')}</h1>
            <div className='Opts'>
                <div className='opt'>
                    <img src={Exibe} alt='com' className='ImgOp'/>
                    <p>{props.translate('home.options.line2')}</p>
                </div>
                <div className='opt'>
                    <img src={Inter} alt='com' className='ImgOp'/>
                    <p>{props.translate('home.options.line3')}</p>
                </div>
                <div className='opt'>
                    <img src={Vend} alt='com' className='ImgOp'/>
                    <p>{props.translate('home.options.line4')}</p>
                </div>
            </div>
        </Optione>
    )
}


const Optione = styled.div`
    background: radial-gradient(circle farthest-side,#2A355A,#090C17);
    padding: 2rem 6rem;
    display: block;
    text-align: center;

    .Opts{
        display: flex;
        text-align:center;
        justify-content: center;
    }

    .opt{
        margin: 10px;
        color: #A8C813; 
    }

    h1{
        color: #fff;
    }
    p{
        font-size: 25px;
    }
    .ImgOp{
        height: 6rem;
    }

    @media screen and (max-width: 760px){
        padding: 1rem 0rem;

        .ImgOp{
            height: 4rem;
        }

        p{
            font-size: 12px;
        }
    }
`