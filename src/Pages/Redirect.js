import React, { useState, useEffect } from 'react';
import { isAndroid,isIOS,osName } from 'react-device-detect';

import Box from '../Components/box'


const Redirect = () =>{

    const ios = "https://apps.apple.com/ar/app/vinimay/id1506565366";
    const Android = "https://play.google.com/store/apps/details?id=com.vinimay.app";


    const [redirect, setRedirect] = useState(false);

    
    var fallbackToStore = function() {
        window.location = 'market://details?id=com.vinimay.ap';
        setRedirect("entro aca")
      };
      var openApp = function() {
        window.location.replace('YouTube://');
        setRedirect("entro al open")

      };
      var triggerAppOpen = function() {
        openApp();
        setTimeout(fallbackToStore, 250);
    };



    useEffect(() => {
        if(isAndroid){
            triggerAppOpen();
        }else if(isIOS){
            triggerAppOpen();
        }else{
            console.log(window.location=Android);
        }
    }, [
       //here you could pass dependencies, or leave it empty to call this effect only on first render
    ]);        


    

    return (
        <div className='pageContacto'>
            <Box/>
            <form action="YouTube://" target="_blank">
                 <input type="submit" value="Open App" />
            </form>

            <a href="http//YouTube://">My Facebook Group</a>
            <a href="intent://scan/#Intent;scheme=zxing;package=com.google.zxing.client.android;S.browser_fallback_url=http%3A%2F%2Fzxing.org;end"> Take a QR code </a>

            {redirect}       
        </div>
    );
}


export default Redirect;