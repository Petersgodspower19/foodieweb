import React from 'react'
import styled from 'styled-components'
import { H3, SubDiv } from '../pages/Dishes'
import image1 from "../assets/img/pic1.png"
import image2 from "../assets/img/pic2.png"
import image3 from "../assets/img/pic3.png"
import SingleReview from './SingleReview'

const Div = styled.div`
    padding: 3rem 2rem;
   margin-top: 1rem;
   text-align: center;
`

function Reviews() {
  return (
    <Div id='reviews'>
        <H3>Our Reviews</H3>
        <SubDiv>
       <SingleReview url={image1} name="Sophia Azura" />
       <SingleReview url={image2} name="John Deo" />
       <SingleReview url={image3} name="Victoria Zoe" />
        </SubDiv>
    </Div>
  )
}

export default Reviews
