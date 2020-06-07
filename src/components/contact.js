import React, {CuseRef} from 'react';
import styled from 'styled-components';
import LinkedinSmall from '../img/linkedinsmall.png';
import GithubSmall from '../img/githubsmall.png';

const HomePage = () => {
    return (
    <SomeDiv >
        <IntroDiv>
            <Name>Contact me?</Name>
            <div style={{ display: 'flex' }}>
                Get in touch with me at jihyunca@gmail.com or find me on social media.
            </div>
            <Intro>
                <a href="https://www.linkedin.com/in/lizzie-kim-418894169/">
                    <GrayImage src={LinkedinSmall} />
                </a>
                <a href="https://www.github.com/jihyunca">
                    <GrayImage src={GithubSmall} />
                </a>
            </Intro>
        </IntroDiv>
    </SomeDiv>
    );
}


const GrayImage = styled.img`
    opacity: 1;
    width: 10%;
    &:hover {
        opacity: 0.5;
        mouse: pointer;
        transition: 0.5s;
    }
    text-align: center;
    margin-right: 5px;
`;

const SomeDiv = styled.div`
    justify-content: center;
    align-items: center;
    background-color: #F6E7E7;
    width: 100%;
    height: 50vh;
    margin-top: 40px;
    @media (max-width: 768px) {
        margin-right: 10px;
        margin-left: 10px;
    }
`;

const IntroDiv = styled.div`
    text-align: left;
    margin-left: 200px;
    margin-right: 200px;
    word-wrap: break-word;
    overflow: hidden;
`;


const Name = styled.h1`
    ${'' /* color: palevioletred; */}
    font-size: 40px;
    text-align: left;
    font-family: Tajawal;
    margin-bottom: 80px;
`;


const Intro = styled.div`
    display: inline-block;
    justify-content: left;
    margin-top: 10px;
    text-align: left;
    height: 200px;
`;


export default HomePage;