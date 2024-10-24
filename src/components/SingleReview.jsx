import React from 'react'
import styled from 'styled-components'
import { H3 } from '../pages/Dishes'

const Div = styled.div`
    border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  width: 350px;
  text-align: start;
  color: #959595;
  font-size: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: 1rem;
  transition: transform 0.2s;
  padding: 10px;

  

    @media (max-width: 768px) {
        width: 70%;
        margin: 1rem auto;
  }
  @media(min-width:678px) {
    &:hover {
        transform: scale(1.05);
  }
  }
`
const Article = styled.article`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`
const Img = styled.img`
    border-radius: 50%;
    width: 30px;
`

function SingleReview({url, name}) {
  return (
    <Div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim facilis eveniet quis eligendi illo architecto sunt molestias fugiat et?
        Voluptatum ullam aliquid asperiores repellendus sunt enim natus culpa veritatis vel.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi quod, odio tenetur iste incidunt saepe dignissimos totam optio blanditiis sit mollitia perspiciatis voluptatem unde doloremque est atque provident voluptas aliquam?
        </p>
      <Article>
     <Img src={url} alt="" />
     <H3>{name}</H3>
      </Article>
    </Div>
  )
}

export default SingleReview
