import React from 'react'
import styled from 'styled-components'
import AcordionTile from './AcordionTile'

export default function Questions() {
    return (
        <Querys className='preguntas-container' id={'faq'}>
            <h1 className='line1'>PREGUNTAS FRECUENTES</h1>
            <div className='list'>
                <AcordionTile key="1" pregunta="¿Cómo creo una cuenta en Vinimay?" respuesta={["Nota: Debes tener al menos 13 años para crear una cuenta de Vinimay.", <br/>, <br/>, "Para crear una cuenta de Vinimay:", <br/>, <br/>, "A- Descárgate Vinimay en el App Store / Play Store", <br/>, "B- Escribe tu nombre, correo electrónico, nombre de usuario, celular y contraseña.", <br/>, "C- Aceptar Términos y Condiciones.", <br/>, "d- Haz clic en ", <strong>Registrarte</strong>,  " ."]} />
                <AcordionTile key="2" pregunta="¿Cómo inicio sesión en Vinimay?" respuesta={["Para iniciar sesión en Vinimay:", <br/>, <br/>, "A- Ir a iniciar sesión con el email registrado.", <br/>, "B- Luego colocar la contraseña y continuamente ingresar."]} />
                <AcordionTile key="3" pregunta="¿No puedo iniciar sesión en Vinimay?" respuesta={["Si tienes problemas para iniciar sesión en tu cuenta de Vinimay, prueba alguna de las siguientes sugerencias:", <br/>, <br/>, "A- Intenta recuperar tu cuenta de Facebook.", <br/>, "B- Si tu inconveniente es que no recordás la contraseña:", <br/>, "C- Ve a recuperar contraseña en nuestra app para que te envíenos un enlace para recuperarla y luego iniciar sesión con la nueva contraseña.", <br/>, <br/>, "Si tienes inconveniente con tu correo electrónico, ponte en contacto con nosotros vía:", <br/>, <br/>, "Email: soporte@vinimayapp.com"]} />
                <AcordionTile key="4" pregunta="¿Cómo cambio o restablezco mi contraseña de Vinimay?" respuesta={["A- Tienes que colocar tu email y luego colocar recuperar contraseña.", <br/>,"B- Recibirás un enlace de recuperar contraseña desde vinimayok@gmail.com a tu E-mail registrado.", <br/>, "C- Ingresa al enlace que recibas para luego colocar la nueva contraseña."]} />
                <AcordionTile key="5" pregunta="¿Como hago para que mi contraseña de Vinimay sea segura?" respuesta={["A- Siempre siguiendo nuestras recomendaciones de seguridad.", <br/>, "B- Crea tu contraseña con 8 caracteres o más. Puede ser cualquier combinación de letras, números y símbolos .No se admiten acentos ni caracteres acentuados."]}/>
                <AcordionTile key="6" pregunta="¿Desde que año se verifican las camisetas?" respuesta={["A- Desde el 2005 en adelante."]}/>
                <AcordionTile key="7" pregunta="¿ En todos los casos las camisetas se van a verificar?" respuesta={["A- No debido a que dependemos de la información que nos provea el usuario.", <br/>, "B- Estado de la camiseta.", <br/>, "C- Código de la misma.", <br/>, "D- Donde fue fabricada."]}/>
                <AcordionTile key="8" pregunta="¿Las camisetas antiguas/retros, se van a verificar?" respuesta={["A-Dependiendo que información que nos provea el usuario.", <br/>, "B-La información que tenga el mercado sobre esa camiseta."]}/>
                <AcordionTile key="9" pregunta="¿Cómo ingreso camisetas a Vinimay?" respuesta={["A- Ingreso a la sección “agregar”.", <br/>, "B- Elijo, país seguido de equipo de la camiseta.", <br/>, "C- Coloco, titulo, marca, año, talle y descripción.", <br/>, "D- Si es titular / suplente o nueva / usada.", <br/>, "E- Si la camiseta es para Exhibir, intercambiar o vender.", <br/>, "F- Código de la camiseta.", <br/>, "G- Ingreso las imágenes desde la cámara o biblioteca."]}/>
            </div>
        </Querys>
    )
}

const Querys = styled.div`
    justify-content: center;
    align-items: center;
    align-self: center;
    padding: 2rem 25rem;

    .list{
        width:40rem;
        align-items: center;
        justify-content: center;
        margin: 0;
        padding: auto;
    }
    .line1{
        font-size: 35px;
        color:#A8C813;
    }

    @media screen and (max-width: 769px){
        padding: 0rem 2rem;
        .list{
            width: 17rem;
        }
    }

`
