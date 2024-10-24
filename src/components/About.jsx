import React from 'react'
import image from "../assets/img/about.png"
import styled from 'styled-components'

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 2rem;

    @media (max-width: 768px) {
    flex-direction: column;
  }

`
const Text = styled.div`
    width: 50%;

    @media (max-width: 768px) {
   width: 100%;
  }
`
const H3 = styled.h3`
    font-size: 28px;
`

function About() {
  return (
    <Div id='about'>
        <img src={image} alt='' />

        <Text>
            <H3>Why Choose Us?</H3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nihil, corporis, ducimus ipsum obcaecati asperiores temporibus architecto exercitationem sapiente velit amet dolorum magni ab, 
                molestias tempore doloribus. Nemo, vitae laboriosam?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sit quod possimus totam repellat! Magnam quidem, accusamus similique doloribus facere, error, cumque omnis repellendus ipsam quisquam ratione sint. Consequatur, eveniet odio?</p>
        </Text>
      
    </Div>
  )
}

export default About
