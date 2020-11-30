import React from 'react'
import styled from 'styled-components'
import CardShirt from './CardShirt'


export default function ListShirt(props) {

    const listItems10 = props.TopShirts.map(function(d, idx){
        return  (
                <CardShirt 
                        key={idx}
                        translate={props.translate} 
                        className='cardShirt'
                        user={d.user} 
                        year={d.year}
                        club={d.club}
                        country={d.country} 
                        image={d.image}
                        tipo={d.tipo}
                />
            )
    });


    return (
        <div>
            <Contain className='cardShirtContainer'>
                {listItems10}
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
