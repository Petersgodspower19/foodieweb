import React from 'react'
import SingleDish from '../components/SingleDish'
import styled from 'styled-components'
import image1 from "../assets/img/img1.jpg"
import image2 from "../assets/img/img2.jpg"
import image3 from "../assets/img/img3.jpg"
import image4 from "../assets/img/img4.jpg"
import image5 from "../assets/img/img5.jpg"
import image6 from "../assets/img/img6.jpg"

const Div = styled.div`
   padding: 3rem 2rem;
   margin-top: 1rem;
   text-align: center;
    
`
export const SubDiv = styled.div`
      display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
export const H3 = styled.h3`
font-size: 28px;
color: black;
`

function Dishes() {
  return (
    <Div id='dishes'>
        <H3>Our Dishes</H3>
      <SubDiv>
        <SingleDish url={image1} />
        <SingleDish url={image2} />
        <SingleDish url={image3}/>
        <SingleDish  url={image4}/>
        <SingleDish  url={image5}/>
        <SingleDish url={image6}/>
      </SubDiv>
    </Div>
  )
}

export default Dishes
