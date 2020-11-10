import React from 'react'
import styled from 'styled-components'

export default function TopItems(props) {
    return (
        <Contain className='top-item'>
            <div className='position'>
                <h1>{props.count} - </h1>
            </div>
            <div className='userDate'>
                <h1>{props.user} </h1>
                <h1 className='us'>{props.translate('comunity.TopItems.line1')} {props.user}</h1>
            </div>
            <br/>
            <div className='row'>
                <h1>&nbsp;&#187;&nbsp;</h1>
            </div>
            <div className='countShirt'>
                <h1> {props.countShirt} {props.translate('comunity.TopItems.line2')}</h1>
            </div>
        </Contain>
    )
}

const Contain = styled.div `
    display: flex;
    justify-content: center;
        text-align: center;



    .position{
        color:#171E36;
    }
    .userDate{
        color:#171E36;
        text-align: left;
        margin: 0;
        padding-top:20px;
    }
    .userDate h1{
        margin: 0;
    }
    .row{
        color:#A8C813;
    }
    .us{
        color:#A8C813;
        font-size: 20px;
        margin: 0;
    }

    .countShirt{
        color:#171E36;
    }

    @media screen and (max-width: 769px){
        justify-content: center;
        text-align: center;

        h1{
            font-size: 15px;
        }
        .userDate{
            color:#171E36;
            text-align: left;
            margin: 0;
            padding-top:10px;
        }
        .us{
        color:#A8C813;
        font-size: 10px;
        margin: 0;
    }
    }
`
