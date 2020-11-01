import React from "react";
import classNames from 'classnames'
import styled from 'styled-components'



export default function Modal(props) {

  const ModalClass = classNames('Modal-wrapper', {
      showModal: props.show,
  })
  return (
      <Modale>
          <div className="Modal">
              {props.show && 
              <div className="Modal-overlay" onClick={props.close}/>
              }
              <div className={ModalClass}>
                  <h1 className='closed' onClick={props.close}>x</h1>
                  {props.children}
              </div>
          </div>
      </Modale>
  )
}

const Modale = styled.div`
    position: fixed;
    /* justify-content: center; */
    align-items: left;
    /* top:; */
    /* left: 14%; */
    z-index: 10000;
    /* height: 50%; */

    .Modal-wrapper {
        transition: all 0.8s;
        position: relative;
        z-index: 8;
        display: none;
        justify-content: left;
        align-items: left;
        /* top: -10px; */
        bottom: 0;
        left: 2230;
        right: 0;
        transform: translateY(-10%);
        opacity: 0;
        }
.Modal-wrapper.showModal {
  transform: translateY(30%);
  opacity: 1;
  top: -0px;
  justify-content: left;
  align-items: left;
  position: relative;
  display: block;
}
.Modal-overlay {
  background-color: rgba(0,0,0,0.7);
  position: fixed;
  width: 200%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 8;
  cursor: pointer;
}

.closed{
  cursor: pointer;
  color:#fff;
  font-size: 33px;
}

.Modal{
  position: fixed;
  justify-content: left;
  align-items: left;
  top: -19%;
  left: 5%;
  width:90%;
  height: 60%;
}
@media screen and (min-width: 769px){

  .Modal{
    position: fixed;
    justify-content: left;
    align-items: left;
    top: -130px;
    left: 5%;
    width:90%
  }
}
`