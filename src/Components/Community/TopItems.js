import React from 'react'
import styled from 'styled-components'

export default function TopItems(props) {
    return (
            <Contain>
                <tr>
                <td className='position'>
                    <h1>{props.count} - </h1>
                </td>
                <td className='userDate'>
                    <h1> {props.user} </h1>
                    <h1 className='us'>{props.translate('comunity.TopItems.line1')} {props.user}</h1>
                </td>
                <td className='row'>
                <h1>&nbsp;&#187;&nbsp;</h1>
                </td>
                <td className='countShirt'>
                <h1> {props.countShirt} {props.translate('comunity.TopItems.line2')}</h1>
                </td>
                </tr>
               
            </Contain>


        
    )
}

const Contain = styled.div `


    .position{
   
        color:#171E36;
    }
    .userDate{
        color:#171E36;
    }
    .userDate h1{
        margin: 0;
    }
    .row{
        color:#A8C813;
        justify-content: center!important;

    }
    .us{
        color:#A8C813;
        font-size: 20px;
        margin: 0;
    }

    .countShirt{
        color:#171E36;
        justify-content: right;
        text-align: right;
    }

    @media screen and (max-width: 769px){
        justify-content: center;
        text-align: center;

        .position{/*
            justify-content: left!important;
            text-align: left!important;*/
            color:#171E36;
        }
        .row{
            justify-content: center!important;
        }

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
    .countShirt{
        color:#171E36;
        justify-content: right;
        text-align: right;
    }
    }
`
