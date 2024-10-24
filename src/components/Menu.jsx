import React from 'react'

import styled from 'styled-components'
import image1 from "../assets/img/img1.jpg"
import image2 from "../assets/img/img2.jpg"
import image3 from "../assets/img/img3.jpg"
import SingleDish from './SingleDish'

const Div = styled.div`
   padding: 3rem 2rem;
   margin-top: 1rem;
   text-align: center;
    
`
const DishDiv = styled.div`
      display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
const H3 = styled.h3`
   font-size: 28px;
`
 

function Menu() {
  return (
    <Div id='menu'>
        <H3>Premium Menu</H3>
      <DishDiv>
        <SingleDish url={image1} />
        <SingleDish url={image2} />
        <SingleDish url={image3}/>
      </DishDiv>
    </Div>
  )
}

export default Menu
