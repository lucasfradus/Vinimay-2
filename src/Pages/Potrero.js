import React from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet';
import img from '../images/potrero/img1.webp';
import logo from '../images/potrero/logo_potrero.webp'

const Potrero = () => {
    return (
        <Potreros>
            <Helmet>
                <title>Potrero</title>
            </Helmet>
            <div className="section-title">
                <h2>Nos Juntamos con la fundación <b>El Potrero</b></h2> 
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque aut culpa qui itaque omnis quo a ullam quod quas. Exercitationem optio dolorem quaerat nesciunt dolorum debitis vitae quidem, nam et illum cupiditate recusandae quos adipisci sit corrupti vero reiciendis repudiandae ipsam consequuntur illo eligendi. Expedita odio sapiente enim facilis sint!</p>
            </div>
            <div className="section-home">
                <div className="img-container">
                      <img src={img} alt=""/>
                </div>
                <div className="text-container">
                    <img src={logo} alt=""/>
                    <h2>El Potrero</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, adipisciacilis aut consectetur, provident fugit, iure repellendus dolorum suscipit temporibus. Necessitatibus eos, ducimus beatae fuga error libero non recusandae. Voluptatum id exercitationem, in obcaecati sequi eius harum necessitatibus quae quaerat natus quibusdam totam sed.
                    </p>
                </div>
               
            </div>
        </Potreros>
    )
};

const Potreros = styled.div`
  

    .section-title{
        height:40vh;
        background:radial-gradient(circle farthest-side,#2A355A,#090C17);
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding:3rem;
        font-family:'DKDonward';
        color:white;

        h2{
            font-size:2rem;
        }
        p{
            font-size:1rem;
        }

    }


    .section-home{
        width:100%;
        height:40vh;
        background:white;
        display:flex;
        position:relative;
        .img-container{
            width:40%;
            img{
                flex:1;
                max-width: 100%;
                max-height: 100%;
                display: block; 
            }
        }
        .text-container{   
            padding: 2rem;
            flex:3;
            h2{
                font-family:DKDonward
            }
            p{
                padding: 0rem 4rem 0rem 4rem;
                font-family:Scala
            }
          
        }

    }
    

    @media screen and (max-width: 760px){
        .imgfoto{
            display:none;
        }
    }

`

export default Potrero;