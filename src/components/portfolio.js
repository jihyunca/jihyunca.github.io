import React, { useState } from 'react';
import styled from 'styled-components';
import Hack from '../img/hack.png'
import HotelParanoia from '../img/hotel-paranoia.png';
import Ffc from '../img/ffc.png';
import Modal from './modal';

const HomePage = () => {
    const [isHover, setIsHover] = useState(false);
    const [isFirstOpen, setIsFirstOpen] = useState(false);
    const [isSecondOpen, setIsSecondOpen] = useState(false);
    const [isThirdOpen, setIsThirdOpen] = useState(false);

    const toggleFirstModal = () => {
        if (isFirstOpen) {
            setIsFirstOpen(false);
        } else {
            setIsFirstOpen(true);
        }
    }
    const toggleSecondModal = () => {
        if (isSecondOpen) {
            setIsSecondOpen(false);
        } else {
            setIsSecondOpen(true);
        }
    }
    const toggleThirdModal = () => {
        if (isThirdOpen) {
            setIsThirdOpen(false);
        } else {
            setIsThirdOpen(true);
        }
    }

    return (
    <SomeDiv >
        <IntroDiv>
            <Name>Some projects I've worked on.</Name>
        </IntroDiv>
        <Portfolio>
            <Project onClick={() => toggleFirstModal()}>
                <ClickTitle>
                    <ActualTitle>LEARN MORE</ActualTitle>
                </ClickTitle>
                <PrettyTitle>Fashion for Change</PrettyTitle>
                <StyledImage src={Ffc} />
            </Project>
            <Project onClick={() => toggleSecondModal()}>
                <ClickTitle>
                    <ActualTitle>LEARN MORE</ActualTitle>
                </ClickTitle>
                <PrettyTitle>Hotel Paranoia</PrettyTitle>
                <StyledImage src={HotelParanoia} />
            </Project>
            <Project onClick={() => toggleThirdModal()}>
                <ClickTitle>
                    <ActualTitle>LEARN MORE</ActualTitle>
                </ClickTitle>
                <PrettyTitle>BehaviourStacks</PrettyTitle>
                <StyledImage src={Hack} />
            </Project>
        </Portfolio>
        <Modal show={isFirstOpen} mainImage={Ffc}
                onClose={() => toggleFirstModal()}>
                Fashion for Change is one of Waterloo's biggest student-led non-profit organizations.
                I had the opportunity to be on the digital team that helped support the organization's
                activities whether it was maintaining the website, updating information, or creating new
                pages and platforms depending on the events. Some tools that were used were Contentful,
                Webflow, and Vue.js.
        </Modal>
        <Modal show={isSecondOpen} mainImage={HotelParanoia}
                onClose={() => toggleSecondModal()}>
                Hotel Paranoia is a game that created with C# and Unity. Stemmed as a passion project,
                a few friends and I decided to create a game from scratch, including the storyline, 
                the graphics, animation, and the scripts behind it.
        </Modal>
        <Modal show={isThirdOpen} mainImage={Hack}
                onClose={() => toggleThirdModal()}>
                BehaviourStacks is a project that stemmed out of a hackathon called RyersonHacks.
                The project is a tool for companies to put out advertisements, capture the expressions
                of the audience that comes across the ads, and analyze their target. Using Keras and 
                Tensorflow, the group was able to examine emotions, age, gender, and create a well-organized
                report.
        </Modal>
    </SomeDiv>
    );
}

const StyledImage = styled.img`
    max-width: 100%;
`;

const PrettyTitle = styled.h3`
    color: #7D6E6E;
    text-align: center;
`;

const ActualTitle = styled.h3`
    font-family: Tajawal;
    font-size: 30px;
    margin: auto;
    margin-top: 50%;
`;

const ClickTitle = styled.div`
    text-align: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    align-items: center;
    justify-content: center;
    margin-top: 0px;
    opacity: 0;
    &:hover {
        opacity: 1;
        z-index: 2;
        transition: 0.5s;
    }
`;

const SomeDiv = styled.div`
    justify-content: center;
    align-items: center;
    background-color: #F6E7E7;
    width: 100%;
    min-height: 85vh;
    margin-top: 10px;
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

const Name = styled.h1`
    ${'' /* color: palevioletred; */}
    font-size: 40px;
    text-align: left;
    font-family: Tajawal;
    margin-bottom: 60px;
`;


const Portfolio = styled.div`
    padding: 20px;
    background: #AE9696;
    margin-left: 40px;
    margin-right: 40px;
    ${'' /* background: #ecf2f9; */}
    text-align: left;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    grid-gap: 1rem;
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const Project = styled.div`
    padding: 20px;
    position: relative;
    background: #F2F0F0;
    &:hover {
        opacity: 0.7;
        cursor: pointer;
        transition: 0.5s;
    }
`;

const ProjectExplanation = styled.div`
    padding: 20px;
    max-width: 100%;
    ${'' /* background: #F2F0F0; */}
    background: blue;
    opacity: 1;
    ${'' /* opacity: ${props => props.hover ? 1 : 0}; */}
    transition: 0.5s;
`;

export default HomePage;