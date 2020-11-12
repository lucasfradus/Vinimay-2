import React from 'react'
import styled from 'styled-components'
import {useTranslation} from "react-i18next";


export default function LangSelect() {
    const [i18n] = useTranslation('common');

    //const currentLang = i18n.language;


    return (
        <Selector>



            <div>
                <button onClick={() => i18n.changeLanguage('es')}>Español</button>
                <button onClick={() => i18n.changeLanguage('en')}>English</button>
            </div>
        </Selector>


    );
}


const Selector = styled.div`
color:red;
display:block;
bottom:5px;
`