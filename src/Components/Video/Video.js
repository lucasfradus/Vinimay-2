import React from 'react'
import ReactPlayer from 'react-player/lazy'
import styled from 'styled-components'


export default function Video(props) {
    return (
        <Container className="flexible-container">
            <ReactPlayer url='https://www.youtube.com/watch?v=X4dhGbWCtGA'
                playing= {props.show}
                controls
                />
        </Container>
        
    )
}



const Container = styled.div`
display: flex;
padding: 0rem;
min-height:0em;
width: 100% !important;

.flexible-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 20px; height: 0; 
    overflow: hidden;
    justify-content: center;
    padding: 10px;
    padding: 0px !important;
  }
  
  .flexible-container iframe,
  .flexible-container div,
  .flexible-container object,
  .flexible-container embed {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }

  .flexible-container iframe {
    min-height: calc(10vh - 800px);
  }


`