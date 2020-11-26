import React from 'react'
import styled from 'styled-components'
import AcordionTile from './AcordionTile'

export default function Questions(props) {
    return (
        <Querys className='preguntas-container' id={'faq'}>
            <h1 className='line1'>{props.translate('comunity.Questions.line1')}</h1>
            <div className='list'>
                <AcordionTile key="1" pregunta={props.translate('comunity.Questions.question1')} respuesta={[props.translate('comunity.Questions.answer1ln1'), <br/>, <br/>,props.translate('comunity.Questions.answer1ln2'), <br/>, <br/>,props.translate('comunity.Questions.answer1ln3'), <br/>, <br/>,props.translate('comunity.Questions.answer1ln4'), <br/>, <br/>,props.translate('comunity.Questions.answer1ln5'), <br/>, <br/>,props.translate('comunity.Questions.answer1ln6')]} />
                <AcordionTile key="2" pregunta={props.translate('comunity.Questions.question2')} respuesta={[props.translate('comunity.Questions.answer2ln1'), <br/>, <br/>,props.translate('comunity.Questions.answer2ln2'),<br/>, <br/>,<br/>,props.translate('comunity.Questions.answer2ln3')]} />
                <AcordionTile key="3" pregunta={props.translate('comunity.Questions.question3')} respuesta={[props.translate('comunity.Questions.answer3ln1'), <br/>, <br/>,props.translate('comunity.Questions.answer3ln2') , <br/>,props.translate('comunity.Questions.answer3ln3') , <br/>,props.translate('comunity.Questions.answer3ln4') , <br/>, <br/>,props.translate('comunity.Questions.answer3ln5') , <br/>, <br/>,props.translate('comunity.Questions.answer3ln6')  ]} />
                <AcordionTile key="4" pregunta={props.translate('comunity.Questions.question4')} respuesta={[props.translate('comunity.Questions.answer4ln1'), <br/>,props.translate('comunity.Questions.answer4ln2'), <br/>,props.translate('comunity.Questions.answer4ln3') ]} />
                <AcordionTile key="5" pregunta={props.translate('comunity.Questions.question5')} respuesta={[props.translate('comunity.Questions.answer5ln1'), <br/>,props.translate('comunity.Questions.answer5ln2')]}/>
                <AcordionTile key="6" pregunta={props.translate('comunity.Questions.question6')} respuesta={[props.translate('comunity.Questions.answer6ln1')]}/>
                <AcordionTile key="7" pregunta={props.translate('comunity.Questions.question7')} respuesta={[props.translate('comunity.Questions.answer7ln1'), <br/>,props.translate('comunity.Questions.answer7ln2') , <br/>,props.translate('comunity.Questions.answer7ln3') , <br/>,props.translate('comunity.Questions.answer7ln4') ]}/>
                <AcordionTile key="8" pregunta={props.translate('comunity.Questions.question8')} respuesta={[props.translate('comunity.Questions.answer8ln1'), <br/>,props.translate('comunity.Questions.answer8ln2') ]}/>
                <AcordionTile key="9" pregunta={props.translate('comunity.Questions.question9')} respuesta={[props.translate('comunity.Questions.answer9ln1'), <br/>,props.translate('comunity.Questions.answer9ln2') , <br/>,props.translate('comunity.Questions.answer9ln3') , <br/>, props.translate('comunity.Questions.answer9ln4'), <br/>,props.translate('comunity.Questions.answer9ln5') , <br/>,props.translate('comunity.Questions.answer9ln6') , <br/>, props.translate('comunity.Questions.answer9ln7')]}/>
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
