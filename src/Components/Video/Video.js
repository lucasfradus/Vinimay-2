import React from 'react'
import ReactPlayer from 'react-player/lazy'
import styled from 'styled-components'


export default function Video() {
    return (
        <Container className="flexible-container">
            <ReactPlayer url='https://www.youtube.com/watch?v=X4dhGbWCtGA'
                playing
                controls
                width = "30em"
                height = "20em"
                />
        </Container>
        
    )
}



const Container = styled.div`
display: block;
padding: 1rem 0rem 1rem;
min-height:40em;

.flexible-container {
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 30px; height: 0; 
    overflow: hidden;
    justify-content: center;
    padding: 10px;
    
  }
  
  .flexible-container iframe,
  .flexible-container object,
  .flexible-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }


`