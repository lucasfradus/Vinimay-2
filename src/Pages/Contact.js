import React from 'react'
import Box from '../Components/box'
import Downin from '../Components/Contact/Downin'
import { Animated } from 'react-animated-css'
import Form from '../Components/Contact/Form'


import Title from '../Components/Contact/Title'

export default function Contact() {

    const config = {
        api: `http://www.vinimayapp.com/api/contact/index.php`,
       
        successMessage: 'Gracias por ponerte en contacto con nosotros, nos comunicaremos a la brevedad',
        errorMessage: 'Por favor completa todos los campos antes de enviar el mensaje!',
        fields:{
          firstName: '',
          lastName: '',
          email: '',
          msg: ''
        },
        fieldsConfig:  [
         { id: 1, label: 'Nombre', fieldName: 'firstName', type: 'text',placeholder:'Escribí aca tu nombre', isRequired: true , klassName:'Ip'},
         { id: 2, label: 'Apellido', fieldName: 'lastName', type: 'text', placeholder: 'Escribí aca tu apellido', isRequired: true , klassName:'Ip'},
         { id: 3, label: 'Email', fieldName: 'email', type: 'email', placeholder: 'Escribí aca tu mail', isRequired: true , klassName:'Ip'},
         { id: 4, label: 'Mensaje', fieldName: 'msg', type: 'textarea',placeholder:'Escribí aca tu mensaje', isRequired: true , klassName:'Ip'}
        ]
      }


    return (
        <div className='pageContacto'>
            <Box/>
            <Animated animationIn="fadeInUp" animationOut="flipOutX" animationInDuration={600} animationOutDuration={400} isVisible={true}>
                <Title/>
            </Animated>
            <Animated animationIn="fadeInUp" animationOut="flipOutX" animationInDuration={600} animationOutDuration={400} isVisible={true}>
                <Form config={config} />
            </Animated>
            <Animated animationIn="fadeInUp" animationOut="flipOutX" animationInDuration={600} animationOutDuration={400} isVisible={true}>
                <Downin/>
            </Animated>
        </div>
    )
}
