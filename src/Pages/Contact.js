import React from 'react'
import Box from '../Components/box'
import Downin from '../Components/Contact/Downin'
import { Animated } from 'react-animated-css'
import Form from '../Components/Contact/Form'
import {useTranslation} from "react-i18next";
import Title from '../Components/Contact/Title'
import { Helmet } from 'react-helmet';

export default function Contact() {

    const [t, i18n] = useTranslation('common');


    const config = {
        successMessage: t('Contact-form.messages.success'),
        errorMessage: t('Contact-form.messages.bad'),
        loadingMessage : t('Contact-form.messages.loading'),
        fields:{
            nombre: '',
            apellido: '',
          email: '',
          mensaje: ''
        },
        fieldsConfig:  [
         { id: 1, label: t('Contact-form.labels.name'), fieldName: 'nombre', type: 'text',placeholder:t('Contact-form.placeholders.placeholder-name'), isRequired: true , klassName:'Ip'},
         { id: 2, label: t('Contact-form.labels.surname'), fieldName: 'apellido', type: 'text', placeholder: t('Contact-form.placeholders.placeholder-last-name'), isRequired: true , klassName:'Ip'},
         { id: 3, label: t('Contact-form.labels.email'), fieldName: 'email', type: 'email', placeholder: t('Contact-form.placeholders.placeholder-email'), isRequired: true , klassName:'Ip'},
         { id: 4, label: t('Contact-form.labels.message'), fieldName: 'mensaje', type: 'textarea',placeholder:t('Contact-form.placeholders.placeholder-message'), isRequired: true , klassName:'Ip'}
        ]
      }


    return (
        <div className='pageContacto'>
            <Helmet>
                <title>Contacto</title>
            </Helmet>
            <Box/>
            <Animated animationIn="fadeInUp" animationOut="flipOutX" animationInDuration={600} animationOutDuration={400} isVisible={true}>
                <Title translate={t}/>
            </Animated>
            <Animated animationIn="fadeInUp" animationOut="flipOutX" animationInDuration={600} animationOutDuration={400} isVisible={true}>
                <Form translate={t} config={config} />
            </Animated>
            <Animated animationIn="fadeInUp" animationOut="flipOutX" animationInDuration={600} animationOutDuration={400} isVisible={true}>
                <Downin translate={t} i18n={i18n} />
            </Animated>
        </div>
    )
}
