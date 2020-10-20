import React from 'react'
import styled from 'styled-components'


export default function CardShirt(props) {
    return (
        <Card className='cardShirt' style={{
		  backgroundImage: "url(" + props.image + ")",
		  backgroundPosition: 'center',
		  backgroundSize: 'cover',
		  backgroundRepeat: 'no-repeat'
		}}>
          <div className='infoShirt'>
            <img src={props.image} alt='Imae' className='ImgBk'/>
               <div className='info'>
                   <div>
                        <h2>Usuario Vinimay</h2>
                        <p className='Sec'>{props.user}</p>
                   </div>
                   <div>
                        <h2>Club</h2>
                        <p className='Sec'>{props.club}</p>
                   </div>
                   <div>
                        <h2>País</h2>
                        <p className='Sec'>{props.country}</p>
                   </div>
                   <div>
                        <h2>Año</h2>
                        <div className='Sec'>{props.year}</div>

                   </div>
                   <div>
                        <div className='type'>  <img src={props.tipo} alt='Imae' className='ImgBk'/></div>
                   </div>

                   </div>


            </div>

        </Card>
    )
}


const Card = styled.div`
    /* There will be 4 cards per row */

    .infoShirt {
        bakcground-image: url({props.image});
    }


    .ImgBk{
        height: 20rem;
        /* margin-left: 10]0vh; */
        /* position: absolute; */
    }
    .type{
      float:right;
      font-size: 20px!important;
      right:1em!important;
      margin-bottom:2em!important;

    }


    .infoShirt{
        flex-basis: 5%;
        display: flex;
        /* width: 100%; */
        justify-content: space-around;
        &:hover{
            .info{
                opacity: 1;
            }
        }
    }

    h2{
        margin:0;
    }

    .Sec{
        /* margin:]s0; */
        color:#171E36;
        font-size: 20px;
    }


    .info{
        position: absolute;
        background-color: rgba(168, 200, 19, 0.7);
        width: 15rem;
        z-index: 3;
        color: white;
        opacity: 0;
        transform: translateY(30px);
        transition: 0.5s;
        &:hover{
          transform: translateY(20px);
          opacity: 1;
        }
    }

    @media screen and (max-width: 769px){
        text-align: center;
        align-items: center;
        justify-content: center;
        .ImgBk{
            height: 23rem;
            /* margin-left: 10]0vh; */
            /* position: absolute; */
        }
    }
`
