import React, {Component, useRef, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Home from './homepage';
import About from './about';
import Portfolio from './portfolio';
import ExtraCurricular from './extracurricular';
import Arrow from '../img/arrow.png';
import Contact from './contact';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

const Sidebar = () => {
    const topRef = useRef(null)
    const myRef = useRef(null)
    const nextRef = useRef(null)
    const lastRef = useRef(null)
    const contactRef = useRef(null)


      return (
        <>
            <div style={{ backgroundColor: '#F6E7E7', float: 'left' }}>
                <div ref={topRef}></div>
                <Home />
                <ArrowContainer>
                    <ShapedArrow src={Arrow} onClick={() => scrollToRef(myRef)}></ShapedArrow>
                </ArrowContainer>
                <Divider ref={myRef} />
                <About />
                <ArrowContainer>
                    <ShapedArrow src={Arrow} onClick={() => scrollToRef(nextRef)}></ShapedArrow>
                </ArrowContainer>
                <Divider ref={nextRef} />
                <ExtraCurricular />
                <ArrowContainer>
                    <ShapedArrow src={Arrow} onClick={() => scrollToRef(lastRef)}></ShapedArrow>
                </ArrowContainer>
                <Divider ref={lastRef} />
                <Portfolio/>
                <ArrowContainer>
                    <ShapedArrow src={Arrow} onClick={() => scrollToRef(contactRef)}></ShapedArrow>
                </ArrowContainer>
                <Divider ref={contactRef} />
                <Contact />
                <Button onClick={() => scrollToRef(topRef)}>Go back to the top</Button>
            </div>
        </>
      )
  }

export default Sidebar;

const Divider = styled.div`
    @media (max-width: 768px) {
       background-color: yellow;
    }
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em 1em 40px 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }
`;

const Bar = styled.div`
    margin-top: 5px;
    padding: 5px;
    display: block;
    margin-left: 200px;
    margin-right: 200px;
    text-align: center;
    align-items: center;
    justify-content: center;
    ${'' /* background: #ecf2f9; */}
    ${'' /* box-shadow: 0 0 5px #d8e5f3; */}
    @media (max-width: 768px) {
        margin-right: 10px;
        margin-left: 10px;
    }
`;

const StyledTitle = styled.h3`
    color: palevioletred;
`;

const SomeDiv = styled.div`
    padding: 20px;
    text-align: left;
    ${'' /* background: #ecf2f9; */}
    margin-left: 200px;
    margin-right: 200px;
    margin-top: 20px;
    @media (max-width: 768px) {
        margin-right: 10px;
        margin-left: 10px;
    }
`;

const AboutMe = styled.div`
    padding: 20px;
    display: block;
    margin-left: 200px;
    margin-right: 200px;
    margin-top: 20px;
    ${'' /* background: #ecf2f9; */}
    text-align: left;
    @media (max-width: 768px) {
        margin-right: 10px;
        margin-left: 10px;
    }
`;

const ShapedArrow = styled.img`
    width: 40px;
    text-align: center;
    &:hover {
       cursor: pointer;
    }
`;

const ArrowContainer = styled.div`
    width: 100%;
    height: 10vh;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        display: none;
    }
`;
