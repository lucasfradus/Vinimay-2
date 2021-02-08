import React from 'react'
import { isAndroid,isIOS,osName } from 'react-device-detect';

import Box from '../Components/box'


const Redirect = () =>{

    const ios = "https://apps.apple.com/ar/app/vinimay/id1506565366";
    const Android = "https://play.google.com/store/apps/details?id=com.vinimay.app";
    
    let redirect;

    if(isAndroid){
        redirect = `Sistema ${osName} - ruta STORE: ${Android}!`;
    }else if(isIOS){
        redirect = `Sistema: ${osName} - ruta STORE: ${ios}!`;
    }else{
        redirect = "browser no soportado";
    }
    

    return (
        <div className='pageContacto'>
            <Box/>
            {redirect}       
        </div>
    );
}


export default Redirect;