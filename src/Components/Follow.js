import React from 'react'
import styled from 'styled-components'
import Mock1 from '../images/archivos-15.png'
import Mock2 from '../images/archivos-16.png'
import Mock3 from '../images/archivos-09.png'
import red1 from '../images/archivos-11.png'
import red2 from '../images/archivos-12.png'
import red3 from '../images/archivos-13.png'
import red4 from '../images/archivos-14.png'

export default function Follow(props) {
    return (
        <Following className='follow-container'>
            <div className='moc1'>
                <img src={Mock1} alt='com' className='Img1'/>
            </div>
            <div className='Foll'>
                <img src={Mock3} alt='com' className='Img3'/>
                <h1>{props.translate('Follow')}</h1>
                <div>
                  <a target="_blank" rel="noopener noreferrer"  href="https://www.instagram.com/vinimayapp_es"><img src={red1} alt='com' className='redImg'/></a>
                  <a target="_blank" rel="noopener noreferrer"  href="https://www.facebook.com/vinimayapp/"><img src={red2} alt='com' className='redImg'/></a>
                  <a target="_blank" rel="noopener noreferrer"  href="https://twitter.com/appvinimay"><img src={red3} alt='com' className='redImg'/></a>
                  <a target="_blank" rel="noopener noreferrer"  href="https://www.linkedin.com/company/vinimay-app/"><img src={red4} alt='com' className='redImg'/></a>
                </div>
            </div>
            <div className='moc2'>
                <img src={Mock2} alt='com' className='Img2'/>
            </div>
        </Following>
    )
}


const Following = styled.div`
        display:flex;
        background: radial-gradient(circle farthest-side,#2A355A,#090C17);
        justify-content: space-between;
        color: #A8C813;

    .Img1{
        height: 20rem;
    }

    .Foll{
        display: block;
    }
    .Img2{
        height: 20rem;
    }
    .Img3{
        margin-top: 20px;
        height: 10rem;
    }

    .redImg{
        height: 3rem;
        margin: 10px;
        cursor:pointer;
    }

    @media screen and (max-width: 769px){
        padding: 0;
        margin: 0;
        .Img1, .Img2{
            display: none;
        }
    }
`
