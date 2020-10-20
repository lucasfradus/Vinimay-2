import React from 'react'
import styled from 'styled-components'
import Nov from '../../images/archivos-18.jpg'
import CardTop from './CardTop'
import TopItems from './TopItems'
import Mockup_left from '../../images/mockups/mockups_05.png'
import Mockup_right from '../../images/mockups/mockups_06.png'

export default function TopTen() {
    return (
        <Container>
            <div className='topi'>
                <img src={Mockup_left} alt="mpckup" className='mockup-float-left'/>
                <h1 className='line3'>TOP 10</h1>
                <h1 className='line5'>MUSEOS CON MÁS CAMISETAS</h1>
                <div className='cards'>
                    <CardTop number="-1"/>
                    <CardTop number="2"/>
                    <CardTop number="1"/>
                    <CardTop number="3"/>
                    <CardTop number="-1"/>
                </div>
                <img alt="" src={Mockup_right} className='mockup-float-right'/>
            </div>
            <div className='items'>

                <TopItems count={4} user='Victoria Flores' countShirt={200}/>
                <TopItems count={5} user='Victoria Flores' countShirt={200}/>
                <TopItems count={6} user='Victoria Flores' countShirt={200}/>
                <TopItems count={7} user='Victoria Flores' countShirt={200}/>
                <TopItems count={8} user='Victoria Flores' countShirt={200}/>
                <TopItems count={9} user='Victoria Flores' countShirt={200}/>
            </div>
        </Container>
    )
}


const Container = styled.div`
    .topi{
        margin:0;
        padding: auto;
        align-content:center;
        display: block;
        align-items: center;
        width: 100%;
        /* height: 70vh; */
        background-image: linear-gradient(to bottom, rgba(168, 200, 19, 0.7),#A8C813), url(${Nov});
        background-attachment: fixed;
        background-size: cover;
    }

    .cards{
        padding: 2rem 15rem;
        align-items: center;
        display: flex;
        justify-content: space-around;
    }

    .line3{
        color:#fff;
        font-size: 40px;
        margin:0;
        padding-top: 2rem;
    }
    .line5{
        color:#171E36;
        font-size: 40px;
        margin:0;
    }

    .items{
        justify-content: center;
        text-align: center;
        padding: 2rem 0rem;
    }

    @media screen and (max-width: 769px){
        .line3{
            color:#fff;
            font-size: 20px;
            margin:0;
            padding-top: 2rem;
        }
        .line5{
            color:#171E36;
            font-size: 20px;
            margin:0;
        }

        .mockup-float-right, .mockup-float-left {
            display: none;
        }

        .cards{
            padding: 4rem 5rem;
            align-items: center;
            display: block;
            justify-content: space-around;
        }
    }

`
