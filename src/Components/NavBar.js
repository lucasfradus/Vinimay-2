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
                            onClick={handleToggle}

                        className="nav-btn2">
                            <li className="nav-item">
                            <Link to="/">Descarga</Link>
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
            height: 0;
            overflow: hidden;
            transition: all 0.3s linear;
            list-style-type: none;
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
            /* font-size: 1rem; */
            font-weight: 100;
            letter-spacing: 1px;
            font-weight: 400;
            }
            .nav-links a:hover {
                color: #fff;
            cursor: pointer;
            }

            .show-nav {
            height: 160px;
            }

            /* Cuando no es para dispositivos moviles */



        @media screen and (min-width: 768px){
            background: linear-gradient(to top, rgba(42, 58, 64, 0.0), #171E36);

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
                height: auto;
                display: flex;
                margin-left: 0rem;
            }
            .nav-links a {
                margin: 0 .5rem;
                padding: 4.5rem 0;
            }
        }
`
