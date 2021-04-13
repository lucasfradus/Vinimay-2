import React from 'react'


import styled from 'styled-components'
import { HashLink as Link } from 'react-router-hash-link';


export default function Footer(props) {
    return (
        <Foote className='footer-parent'>
            <div className='footer'>
                <div className='legal'>
                    <h1>{props.translate('Footer.legal.legal')}</h1>
                    <ul className='navLink'>
                        <li>
                            <Link target="_blank"  to='/terms#top'>{props.translate('Footer.legal.ln1')}</Link>
                        </li>
                        <li>
                            <Link target="_blank"  to='/privacy'>{props.translate('Footer.legal.ln2')}</Link>
                        </li>
                        <li>
                            <Link to='/contact#top'>{props.translate('Footer.legal.ln3')}</Link>
                        </li>
                    </ul>


                    <p></p>
                </div>
                <div className='pab'>
                    <h1>{props.translate('Footer.ads.ads')}</h1>
                    <ul className='navLink'>
                        <li>
                            <Link to='/'>{props.translate('Footer.ads.ln1')}</Link>
                        </li>
                        <li>
                            <Link to='/'>{props.translate('Footer.ads.ln2')}</Link>
                        </li>
                        <li>
                            <Link to='/'>{props.translate('Footer.ads.ln3')}</Link>
                        </li>
                    </ul>
                </div>
                <div className='pab'>
                    <h1>{props.translate('Footer.comunity.comunity')}</h1>
                    <ul className='navLink'>
                        <li>
                            <Link to='/faq#top'>{props.translate('Footer.comunity.ln1')}</Link>
                        </li>
                    </ul>
                    <p></p>
                </div>
            </div>


        </Foote>
    )
}


const Foote = styled.div`
    background-color: #A8C813;
    padding: 1rem 2rem;
    h1{
        color: #fff;
        margin-left: 40px;
    }

    .footer {
        display: flex;
        justify-content: space-between;
    }

    .legal {
        color: #fff;
        flex:1;
        display:block;
        text-align:left;
        padding-left: 30px;
        text-decoration: none;
        /* padding-right: 0px; */
        outline: none;
    }


    .navLink {
        text-decoration: none;
        list-style-type: none;
        background: transparent;
        margin: 0;
        color: #fff;

    }

    li{
        margin-bottom: 20px;

    }

    .navLink a{
        text-decoration: none;
        color: #fff;
        list-style-type: none;
        background: transparent;

        &:hover{
        list-style-type: none;
            display:block;
            color: #000;
                border: none;
                cursor: pointer;
                outline: none;
                background: transparent;
        }

    }
    .pab{
        flex:1;
        display:block;
        text-align:left;
        color:#fff;
        padding-left: 30px;
    }

    @media screen and (max-width: 760px){
        display:block;
        margin: 0;
        padding: 1rem 2rem;
    }
`
