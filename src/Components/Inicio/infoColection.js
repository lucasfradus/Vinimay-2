import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

import Mock_es from '../../images/es/archivo-mockups-02.png'
import Mock_en from '../../images/en/archivo-mockups-02.png'

// import Arrow from '../../images/arrow.png'


export default function InfoCollection(props) {


    var Mock  =  props.i18n.language ==='es' ? Mock_es : Mock_en


    return (
        <CollectionSection>
            <div className='mocups'>
                <img src={Mock} alt='Moc' className='moc1' />  
                <br/>
                <Link  className="discover" to="/" onClick={props.show}>{props.translate('home.infocollection.line1')}</Link>
            </div>

            <div className='info'>
                <h1 className='line1'><big>&#187;</big> {props.translate('home.infocollection.line2')}</h1>
                <p className='line2'>{props.translate('home.infocollection.line3')}</p>
                <h1 className='line1'><big>&#187;</big> {props.translate('home.infocollection.line4')}</h1>
                <p className='line2'>{props.translate('home.infocollection.line5')}</p>
                <h1 className='line1'><big>&#187;</big> {props.translate('home.infocollection.line6')}</h1>
                <p className='line2'>{props.translate('home.infocollection.line7')}</p>
            </div>
        </CollectionSection>
    )
}


const CollectionSection = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 5rem;

    .discover {
        font-family: 'Montserrat', sans-serif!important;
        font-style: italic;
        font-size: 30px;
        font-weight: 900 !important;
        color:#A8C813;
        text-decoration: none;
        text-align:center;
        }
    .discover:hover {
        color:black;
    }


    .mocups{
        flex:1;
        display:block;
        text-decoration:none;
        align-items: center;
    }

    .moc1{
        height: 40em;
    }


    .info{
        flex:1;
        text-align: left;
        align-items: center;
        justify-content:center;
    }



    .line1{
        font-size: 45px;
        color:#A8C813;
    }

    .line2{
        font-size: 20px;
        font-weight: normal;
    }

    @media screen and (max-width: 760px){
        display: block;
        padding: 0;

        .moc1{
            height: 15em;
        }

        .info{
            padding: 0rem 2rem;
            text-align: center;
        }

        .line1{
            font-size: 25px;
            color:#A8C813;
        }

        .line2{
            font-size: 14px;
            font-weight: normal;
        }
    }
`
