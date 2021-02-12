import React from 'react'
import { isAndroid,isIOS,osName } from 'react-device-detect';
import styled from 'styled-components'
import { Animated } from 'react-animated-css'

import Box from '../Components/box'

/*
    if (isAndroid){
        window.location.replace("instagram://user?username=lucasfradusco"); setTimeout(function () {
        window.location.href = Android; }, 25);

    }
*/

const Redirect = () =>{

    const ios = "https://apps.apple.com/ar/app/vinimay/id1506565366";
    const Android = "https://play.google.com/store/apps/details?id=com.vinimay.app";
    let redirect;
    useEffect(() => {
        if(isAndroid){
            redirect = `Sistema ${osName} - ruta STORE: ${Android}!`;
            window.location="instagram://user?username=lucasfradusco"
            setTimeout(() => {
                window.location=Android
            }, 1500);
        }else if(isIOS){
            window.location="instagram://user?username=lucasfradusco"
            setTimeout(() => {
                window.location=ios
            }, 1500);
            redirect = `Sistema: ${osName} - ruta STORE: ${ios}!`;
        }else{
            redirect = "browser no soportado";
            console.log(window.location=Android);
        }
    },)

    return (
        <div className='pageContacto'>
        <Box/>
        <Animated animationIn="fadeInUp" animationOut="flipOutX" animationInDuration={600} animationOutDuration={400} isVisible={true}>
        {button}       
        </Animated>

    </div>
    );
}

const Display = styled.div`
display:flex;
position:relative;
flex-direction:column;
align-items:center;
justify-content:center;
height:10vh;
z-index:99999999;
`

export default Redirect;