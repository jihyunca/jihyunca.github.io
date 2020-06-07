import React, {CuseRef} from 'react';
import styled from 'styled-components';
import Waterloo from '../img/waterloo.png';
import MapleLeaf from '../img/mapleleaf.png';
import Lunchclub from '../img/lunchclub.png';
import Linkedin from '../img/linkedin.png';

const HomePage = () => {
    return (
    <SomeDiv >
        <IntroDiv>
            <Name>A little about myself.</Name>
            <div style={{ display: 'flex' }}>
                <Intro>I'm a computer science student at the University of Waterloo, also pursing a minor
                in Philosophy. Enrolled in the co-op program, I alternate between studying and interning. <br></br>
                <br></br>
                My first internship I worked at a Canadian corporation called Maple Leaf Foods. I did some work with data,
                using <Underline>Python and SAP Hana</Underline>, using libraries such as Pandas as Numpy.
                <br></br><br></br>
                I have previously interned at Lunchclub, an a16z startup located in San Francisco. <br></br>
                I worked as a full stack developer, where I was able to utilize <Underline>React JS and Python</Underline> in order to
                rebuild some pages and also implement new features. <br></br> <br></br>
                Currently, I am interning at LinkedIn as a back-end developer, using <Underline>Hadoop and Scala.</Underline></Intro>
                <IntroTwo>
                    <GrayImage src={Waterloo}></GrayImage>
                    <GrayImage style={{ height: '20%', width: 'auto', marginBottom: '30px' }} src={MapleLeaf}></GrayImage>
                    <GrayImage src={Lunchclub}></GrayImage>
                    <GrayImage src={Linkedin}></GrayImage>
                </IntroTwo>
            </div>
        </IntroDiv>
    </SomeDiv>
    );
}

const Underline = styled.text`
    text-decoration: underline;
    font-size: 20px;

`;

const GrayImage = styled.img`
    filter: grayscale(100%);
    display: table-row;
    width: 50%;
    &:hover {
        filter: grayscale(0%);
        mouse: pointer;
        transition: 0.5s;
    }
    text-align: center;
    margin: 0 auto;
    @media (max-width: 768px) {
        width: 80%;
    }
`;

const SomeDiv = styled.div`
    justify-content: center;
    align-items: center;
    background-color: #F6E7E7;
    width: 100%;
    height: 80vh;
    margin-top: 40px;
    @media (max-width: 768px) {
        margin-right: 10px;
        margin-left: 10px;
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
    left: 100px;
    bottom: 40px;
`;

const Name = styled.h1`
    ${'' /* color: palevioletred; */}
    font-size: 40px;
    text-align: left;
    font-family: Tajawal;
    margin-bottom: 80px;
`;

const Intro = styled.div`
    ${'' /* color: palevioletred; */}
    font-size: 20px;
    text-align: left;
    font-family: Tajawal;
    word-wrap: break-word;
    display: inline-block;
    margin-right: 20px;
`;

const IntroTwo = styled.div`
    display: inline-block;
    margin-left: 20px;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 2px solid #AE9696;
    @media (max-width: 768px) {
        border: none;
    }
    height: 300px;
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