import React, { useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {FaAlignRight} from 'react-icons/fa'

import logo from '../images/logo.png'


export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const  handleToggle = () =>{
          setIsOpen(!isOpen);
      }

      

    return (
        <NavBar2 className="navbar" id="navbar">
            <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Beach resort" className='imgLogo'/>
                        </Link>
                        <button type="button"
                        onClick={handleToggle}
                        className="nav-btn">
                            <FaAlignRight className="nav-icon"/>
                        </button>
                    </div>
                    <ul className={isOpen?"nav-links show-nav":"nav-links"}>
                         <button type="button"
                        onClick={handleToggle}
                        className="nav-btn2">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                        </button>
                        <button type="button"
                        onClick={handleToggle}
                        className="nav-btn2">
                            <li className="nav-item">
                                <Link to="/comunidad">Comunidad</Link>
                            </li>
                        </button>
                        <button type="button"
                        onClick={handleToggle}
                        className="nav-btn2">
                            <li className="nav-item">
                            <Link to="/contacto">Contacto</Link>
                            </li>
                        </button>
                        <button type="button"

                            // onClick={handleToggle}
                        className="nav-btn2">
                            <li>
                            <div className='drop-menu'>
                                <a href='#'>

                            onClick={handleToggle}
                        className="nav-btn2">
                            <li>
                            <div className='drop-menu'>
                                <a href='www'>

                                    Descarga<span className='caret-facing-down'>&#9660;</span>
                                </a>
                                <div className='drop-conten'>
                                    <ul>
<<<<<<< HEAD
                                        <li className='drop-item'><a target='_blank' rel="noopener noreferrer" href='contacto'>Android</a></li>
                                        <li className='drop-item'><a target='_blank' rel="noopener noreferrer" href='https://apps.apple.com/ar/app/vinimay/id1506565366'>IOS</a></li>
=======


                                        {/* <li className='drop-item'><a href='contacto' target='_blank'>Android</a></li>
                                        <li className='drop-item'><a  href='www.google.com'>IOS</a></li> */}


                                        <li className='drop-item'><a target='_blank' href='contacto'>Android</a></li>
                                        <li className='drop-item'><a target='_blank' href='https://apps.apple.com/ar/app/vinimay/id1506565366'>IOS</a></li>
>>>>>>> 179a2b57ba8b25289dc6fd6ee25a07a6993fa0f7
                                    </ul>
                                </div>
                            </div>
                            </li>
                        </button>

                    </ul>
                </div>
        </NavBar2>
    )
}


const NavBar2 = styled.div`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        position: fixed;
        background: linear-gradient(to top, rgb(42, 53, 90), #171E36);
        /* padding: 0.75rem 0.20rem; */
        z-index: 1;

        /* Estilos para mobile */

        .imgLogo{
            margin: 20px;
            height: 30px;
        }

        .nav-center{
            padding:0pc;
            margin:0;
        }
        .nav-header {
            display: flex;
            justify-content: space-between;
        }

        .nav-btn {
            background: transparent;
            border: none;
            cursor: pointer;
            outline: none;
        }
        .nav-btn2 {
            margin-bottom: 5px;
            display:block;
            border: none;
            cursor: pointer;
            outline: none;
            background: transparent;
        }
            .nav-icon {
                font-size: 1.5rem;
                color: #fff;
            }
            .nav-links {
            /* text-align:center; */
            justify-content:right;
            height: 0px;

            /* min-height:300px; */

            /*min-height:300px; */

            overflow: hidden;
            transition: all 0.3s linear;
            list-style-type: none;
        }

        .drop-menu{
            position:relative;
        }
        .drop-menu:hover .drop-conten{
            /* position:relative; */
            /* position:absolute; */
            display: block;
        }
        .drop-menu:hover  .nav-links .show-nav{
            /* height: 160px; */
            /* position:absolute; */
            /* right: 239px; */
            display: block;
        }
        .drop-menu:hover .show-nav{
            height: 290px;
            
        }

        .drop-conten{
            
            padding-top:14px;
            /* padding-right: 10px; */
            padding-bottom: 24px;
            position: absolute;
            top: 100%;
            display:none;
            justify-content:center;
            align-self: center;

            border-radius: 30px;

         
            background-color: #171E36;
            z-Index: 30000;

            

            background-color: #171E36;
            z-Index: 30000;

            height: 70px;
            width: 160px;

            background-color: #171E36;
            z-Index: 30000;
            height: 450px;
<<<<<<< HEAD
            width: 160px;
=======
            width: 140px;

>>>>>>> 179a2b57ba8b25289dc6fd6ee25a07a6993fa0f7
        }

        .drop-item{
            /* text-align: right; */
            right:30px;
            font-size: 23px;
            position:relative;


    
            font-weight: bold;
            color: #A8C813;
            text-decoration: none;
            /* list-style: none; */
            display: inline-block;

            color: #A8C813;
            text-decoration: none;
            /* text-align:left; */
            /*list-style: none;*/
            list-style-type: square;

            font-weight: bold;
            color: #A8C813;
            text-decoration: none;
            text-align:left;
            list-style: none;
            list-style-type: square;
            margin-left:10px;
            display: inline-list;

            z-index:10000;
            margin-bottom: 10px;
        }

        .nav-links a {
            background: transparent;
            font-family: 'Montserrat', sans-serif!important;
            font-style: italic;
            font-size: 28px;
            text-decoration: none;
            margin-bottom: 10px;
            color: #A8C813;
            transition: all 0.3s linear;
            text-align: center;
            
            font-weight: 100;
            letter-spacing: 1px;
            font-weight: 400;
            }
            .nav-links a:hover {
                color: #fff;
            cursor: pointer;
            }

            .show-nav {
            height: 290px;
            }



            /* Estilos para desktop */
        @media screen and (min-width: 768px){
            background: linear-gradient(to top, rgba(42, 58, 64, 0.0), #171E36);

            .show-nav {
            min-height: 220px;
            }
            .nav-btn {
                display: none;
            }

            .imgLogo{
            margin: 20px;
            height: 50px;
                }
            .nav-btn2 {
                background: transparent;
                border: none;
                outline: none;
                text-align:center;
                cursor: pointer;
            }
            .nav-center {
                max-width: 1170px;
                margin: 0 auto;
                display: flex;
                justify-content: space-between;

            }
            .nav-links {
                height: 250px;
                position:absolute;
                display: flex;
                top:-100px;
                right: 10%;
                margin-left: 7rem;
            }
            .nav-links a {
                margin: 0 .5rem;
                /* padding: 4.5rem 0; */
            }
        }

        /*VERSION MOBILE*/
        @media only screen and (max-width: 600px) {
            .show-nav{
                min-height:280px;
            }
            
       
          }
`
