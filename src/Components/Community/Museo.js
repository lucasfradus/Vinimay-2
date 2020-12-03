import React from 'react'
import styled from 'styled-components'
import TitleApShirt from './TitleApShirt'


import Mocku1_es from '../../images/es/archivo mockups nuevos-03.png'
import Mocku1_en from '../../images/en/archivo mockups nuevos-03.png'


export default function Museo(props) {

    var Mockup  =  props.i18n.language==='es' ? Mocku1_es : Mocku1_en


    return (
        <Top>
            <img src={Mockup} alt='na' className='moci'/>
            <TitleApShirt translate={props.translate}/>
            <div className='count'>
                <div className='muse'>
                    <h1 className='line1'>{props.translate('comunity.museum.line1')}</h1>
                    <h1 className='line2'>+{props.counter[0]}</h1>
                </div>
                <div className='shirt'>
                    <h1 className='line1'>{props.translate('comunity.museum.line3')}</h1>
                    <h1 className='line2'>+{props.counter[1]}</h1>
                </div>
            </div>
        </Top>
    )
}


const Top = styled.div`

    .moci{
        position: absolute;
        left: 10em;
        height: 24rem;
        filter: drop-shadow(6px 16px 35px rgba(0, 0, 0, .5));
    }

    .count{
        display: flex;
        padding: 1rem 20rem;
    }

    .muse{
        flex:1;
        display: block;
    }
    .shirt{
        flex:1;
        display: block;
    }

    .line2{
        font-size: 65px;
        color:#A8C813;
        margin:0;
    }
    .line1{
        font-size: 35px;
        color: #171E36;
        margin:0;
    }


    @media screen and (max-width: 769px){
        .count{
            display: block;
            padding: 1rem 1em;
        }

        .moci{
            display: none;
        }
    }



`
