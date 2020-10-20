import React from 'react'
import styled from 'styled-components'
import CardShirt from './CardShirt'

import Imagen1 from '../../images/camisetas/river2.jpg'
import Imagen2 from '../../images/camisetas/francia1.jpg'
import Imagen3 from '../../images/camisetas/river1.jpg'
import Imagen4 from '../../images/camisetas/cato1.jpg'
import Imagen5 from '../../images/camisetas/bayer1.jpg'
import Imagen6 from '../../images/camisetas/boca1.jpg'
import Imagen7 from '../../images/camisetas/velez1.jpg'
import Imagen8 from '../../images/camisetas/arg1.jpg'

import Exibe from '../../images/archivos-01.png'
import Inter from '../../images/archivos-02.png'
import Vend from '../../images/archivos-03.png'


export default function ListShirt() {
    return (
        <div>
            <Contain className='cardShirtContainer'>
                <CardShirt className='cardShirt' user='@VickyFlores' year="2005" club="River" country="Argentina" image={Imagen1} tipo={Exibe}/>
                <CardShirt className='cardShirt' user='@VickyFlores' year="2005" club="Francia" country="Francia" image={Imagen2} tipo={Inter}/>
                <CardShirt className='cardShirt' user='@VickyFlores' year="2005" club="River" country="Argentina" image={Imagen3} tipo={Vend}/>
                <CardShirt className='cardShirt' user='@VickyFlores' year="2005" club="Universidad Católica" country="Chile" image={Imagen4} tipo={Exibe}/>
                <CardShirt className='cardShirt' user='@VickyFlores' year="2005" club="Bayern Munich" country="Alemania"  image={Imagen5} tipo={Inter}/>
                <CardShirt className='cardShirt' user='@VickyFlores' year="2005" club="Boca" country="Argentina"  image={Imagen6} tipo={Vend}/>
                <CardShirt className='cardShirt' user='@VickyFlores' year="2005" club="Velez" country="Argentina"  image={Imagen7} tipo={Exibe}/>
                <CardShirt className='cardShirt' user='@VickyFlores' year="2005" club="Argentina" country="Argentina"  image={Imagen8} tipo={Inter}/>
            </Contain>
            <div className="clearBoth"></div>
        </div>
    )
}

const Contain = styled.div`
    display: flex;
    justify-content: center;
    /* Put a card in the next row when previous cards take all width */
    flex-wrap: wrap;
/*padding: 2rem 25rem;*/
`
