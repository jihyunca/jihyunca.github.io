import React, {CuseRef} from 'react';
import styled from 'styled-components';
import Arrow from '../img/arrow.png';

const HomePage = ()=> {
    return (
    <SomeDiv>
        <IntroDiv>
            <Name>Hi there.</Name>
            <Intro>I'm <Underline>Lizzie.</Underline> <br></br>I am currently a Computer Science student at the University of Waterloo.
            I'm a software engineer, a traveller, and a film enthusiast.</Intro>
        </IntroDiv>
        {/* <ArrowContainer>
            <ShapedArrow src={Arrow}></ShapedArrow>
        </ArrowContainer> */}
    </SomeDiv>
    );
}

const Underline = styled.text`
    text-decoration: underline;
    font-size: 30px;

`;

const ShapedArrow = styled.img`
    width: 40px;
    text-align: center;
    &:hover {
       cursor: pointer;
    }
`;

const ArrowContainer = styled.div`
    position: absolute;
    bottom: 40px;
    width: 100%;
    align-items: center;
    justify-content: center;
`;

const SomeDiv = styled.div`
    justify-content: center;
    align-items: center;
    background-color: #F6E7E7;
    width: 100%;
    height: 80vh;
    margin-top: 40px;
    @media (max-width: 768px) {
        height: 100%;
    }
`;

const IntroDiv = styled.div`
    text-align: left;
    margin-left: 200px;
    margin-right: 200px;
    word-wrap: break-word;
    overflow: hidden;
    @media (max-width: 768px) {
        margin-right: 20px;
        margin-left: 20px;
    }
`;

const ButtonDiv = styled.div`
    position: absolute;
    left: 200px;
    bottom: 40px;
`;

const Name = styled.h1`
    ${'' /* color: palevioletred; */}
    font-size: 60px;
    text-align: left;
    font-family: Tajawal;
    margin-bottom: 80px;
`;

const Intro = styled.text`
    ${'' /* color: palevioletred; */}
    font-size: 30px;
    text-align: center;
    font-family: Tajawal;
    word-wrap: break-word;
`;

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  margin-left: auto;
  margin-right: auto;

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
  }
`;

export default HomePage;