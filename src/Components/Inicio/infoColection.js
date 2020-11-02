import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import Mock from '../../images/mockups/archivo-mockups-02.png'
// import Arrow from '../../images/arrow.png'


export default function InfoCollection(props) {

    console.log(props);

    return (
        <CollectionSection>
            <div className='mocups'>
                <img src={Mock} alt='Moc' className='moc1' />  
                <br/>
                <Link  className="discover" to="/" onClick={props.show}>DESCUBRÍ VINIMAY</Link>
            </div>

            <div className='info'>
                <h1 className='line1'><big>&#187;</big> CREÁ TU MUSEO</h1>
                <p className='line2'>Publicá tu colección de camisetas para exhibir, vender o intercambiar con otros fanáticos</p>
                <h1 className='line1'><big>&#187;</big> INTERACTÚA</h1>
                <p className='line2'>Likeá y comentá tus camisetas preferidas de otros usuarios</p>
                <h1 className='line1'><big>&#187;</big> CHATEÁ</h1>
                <p className='line2'>Mandale mensaje privados a otros fanáticos para charlar sobre sus reliquias</p>
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
