import React from 'react';
import styled from 'styled-components';
import SingleDish from '../components/SingleDish';
import hero from "../assets/img/hero.jpg";
import Button from '../components/Button';

const HomePage = styled.div`
  min-height: 100vh;
  padding: 2rem 2rem;
  background: url(${hero});
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
`;

const Div = styled.div`
  width: 60%;
  padding: 50px;
  color: #959595;

  @media(max-width: 768px) {
    width: 100%;
    padding: 10px;
    padding-top: 2rem;
  }
`;

const H1 = styled.h1`
  font-size: 5rem;
  color: #959595;


  @media(max-width: 900px) {
    font-size: 4rem;
  }

  @media(max-width: 768px) {
    font-size: 3rem;
  }
`;

function Home() {
  return (
    <>
      {/* Add id for the Home section */}
      <HomePage id="home">
        <Div>
          <H1>Elevate Your Inner Foodie with Every Bite</H1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quae dolore vero dicta perspiciatis animi,
             aliquam quos velit totam ducimus iusto fuga nihil quo minima sed iure hic minus vel!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus in veritatis dolorum suscipit quo neque. Sequi, explicabo accusantium sed ea aut nulla quae harum, 
            accusamus in hic rem ducimus?</p>
          <Button>Order Now</Button>
        </Div>
      </HomePage>
    </>
  );
}

export default Home;
