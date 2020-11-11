import styled from 'styled-components'
import Mock2 from '../../images/archivos-15.png'
import React, {useState} from "react";
import PropTypes from "prop-types";
import axios from "axios";

export default function Form_old() {


    
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log("hola")
         const form = new FormData(event.target);
        /* const newDate = new Date().toISOString();*/

         const data = {
           /*  'date' : newDate,*/
             'name': form.get('name'),
             'last': form.get('last'),
             'description': form.get('mesaje'),
         }
        console.log(data)
    }

    
    return (
        <Formula>      
            <div className='for'>
            <div>
            </div>
                <form action="#">
                    <div className='inputCar'>
                        <p className='hold'>Nombre   </p>
                        <input name='nombre'  type='text' placeholder='Escribí aca tu nombre' className='Ip' required/>
                    </div>
                    <div className='inputCar'>
                        <p className='hold'>Apellido </p>
                        <input name='apellido' type='text' placeholder='Escribí aca tu apellido' className='Ip' required />
                    </div>
                    <div className='inputCar'>
                        <p className='hold'>Mail</p>
                        <input name='email'  type='text' placeholder='Escribí aca tu mail' className='Ip' required/>
                    </div>
                    <div className='inputCar'>
                        <p className='hold'>Mensaje </p>
                        <textarea name="mensaje" placeholder='Escribí acá tu mensaje' required></textarea>
                    </div>
                    <div>
                        <button type="submit"  onClick={e => handleSubmit(e)} className='btn'>ENVIAR</button>
                    </div>
                </form>
            </div>
            <div className='imageP'>
                <img src={Mock2} alt='com' className='Img2'/>
            </div>
        </Formula>
    )
}

const Formula = styled.div`
    display: flex;
    justify-content: space-between;
    background: radial-gradient(circle farthest-side,#2A355A,#090C17);


    .for{
        display: block;
        padding: 2rem 3rem;
        text-align: right;
    }

    .btn{
        font-family: 'Montserrat', sans-serif!important;
        font-size: 20px;
        border: none;
        height: 40px;
        width: 140px;
        color: #fff;
        background: #A8C813;
        margin-right: 1.2rem;
        border-radius: 6px;
    }
    .btn:hover{
      background: #EAEAEA;
      color:black;
    }

    .inputCar{
        display:flex;
        align-items: center;
        text-align: left;
    }

    .hold{
      font-size: 28px;
      color:#A8C813;
      margin:0;
      text-transform:uppercase;
      font-weight: 900 !important;
      font-style: italic;
      display: inline-block;
      text-align: right;
    }

    .Ip{
        height: 2rem;
        width: 30rem;
        margin: 20px;
        border-radius: 6px;
        background-color: #EAEAEA;

    }
    .IpM{
        height: 7rem;
        width: 30rem;
        margin: 20px;
        border-radius: 6px;
        background-color: #EAEAEA;

    }

    .imageP{
        /* flex:1; */
    }

    .Img2{
        height: 40rem;
    }
    /* The alert message box */
    .alert {
        padding: 20px;
        color: white;
        margin-bottom: 15px;
        text-align: left!important;
        font-size:18px;

    }

    .danger{
        background-color: #f44336; }

    }
    .success{
        background-color: #A8C813; }

    }
    .info{
        background-color: #2196F3; }

    
    

    /* The close button */
        .closebtn {
        margin-left: 15px;
        color: white;
        font-weight: bold;
        float: right;
        font-size: 22px;
        line-height: 20px;
        cursor: pointer;
        transition: 0.3s;
    }

    /* When moving the mouse over the close button */
    .closebtn:hover {
        color: black;
    }

    @media screen and (max-width: 769px){
        .for{
            display: block;
            padding: 2rem 1rem;
            text-align: right;
        }
        .Img2{
            display: none;
        }

        .inputCar{
            display:block;
            align-items: center;
        }

        .Ip{
            height: 2rem;
            width: 16rem;
            margin: 0px;
            border-radius: 6px;
        }
        .IpM{
            height: 5rem;
            width: 16rem;
            margin: 0px;
            border-radius: 6px;
        }
        .btn{
            font-family: 'Montserrat', sans-serif!important;
            font-size: 20px;
            border: none;
            height: 40px;
            width: 140px;
            color: #fff;
            background: #A8C813;
            margin-top: .7rem;
            border-radius: 6px;
        }
    }
`
