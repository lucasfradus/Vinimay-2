import React from 'react'
import styled from 'styled-components'
import Nov from '../../images/archivos-18.jpg'
import CardTop from './CardTop'
import TopItems from './TopItems'
import Mockup_left from '../../images/mockups/mockups_05.png'
import Mockup_right from '../../images/mockups/mockups_06.png'

export default function TopTen(props) {


    const listItems3 = props.Top3.map(function(d, idx){
        return  (<CardTop translate={props.translate} key={idx} countShirt={d.countShirt} user={d.username} username={d.user} number={d.number}/>)
    });

    const listItems10 = props.Top10.map(function(d, idx){
        return  (
            <TopItems translate={props.translate} key={idx} count={d.number} user={d.user} countShirt={d.countShirt}/>
        )
    });

    return (
        <Container>
            <div className='topi'>
                <img src={Mockup_left} alt="mpckup" className='mockup-float-left'/>
                <h1 className='line3'>{props.translate('comunity.TopTen.line1')}</h1>
                <h1 className='line5'>{props.translate('comunity.TopTen.line2')}</h1>
                <div className='cards'>
                    <CardTop translate={props.translate} countShirt={200} user='Victoria Flores' username='Victoria Flores1' number="-1"/>

                    {listItems3}
                   
                    <CardTop translate={props.translate} countShirt={200} user='Victoria Flores' username='Victoria Flores5' number="-1"/>
                </div>
                <img alt="" src={Mockup_right} className='mockup-float-right'/>
            </div>
            <div className='items'>
                     {listItems10}
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
