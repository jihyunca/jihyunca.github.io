import React, {CuseRef} from 'react';
import styled from 'styled-components';

const HomePage = () => {
    return (
    <SomeDiv >
        <IntroDiv>
            <Name>Things I've done outside of work and school.</Name>
            <Portfolio>
                <Project>
                    <ProjectTitle>
                        I went to Square Code Camp.
                    </ProjectTitle>
                    I was able to join 19 other girls from the U.S and Canada in New York to partake in workshops
                    and activites hosted by Square. We were closely mentored by engineers and learned about diverse
                    areas in technology. I also partook in a hackathon and our team was able to win by implementing
                    a Pay it Forward product with Ruby on Rails.
                </Project>
                <Project>
                    <ProjectTitle>
                        I attended the Deloitte National Leadership Conference.
                    </ProjectTitle>
                    I was one of the 100 students all over Canada who attended the conference in Toronto. We were able to
                    grow our skills in analyzing case studies, designing solutions, and pitching them.
                </Project>
                <Project>
                    <ProjectTitle>
                        Now...
                    </ProjectTitle>
                    I will be part of the Pinterest Engage Scholars' Program.
                </Project>

            </Portfolio>
        </IntroDiv>
    </SomeDiv>
    );
}

const Underline = styled.text`
    text-decoration: underline;
    font-size: 20px;
    font-family: Tajawal;

`;

const ProjectTitle = styled.h3`
    font-size: 20px;
    font-family: Tajawal;
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
    margin-bottom: 30px;
`;

const Project = styled.div`
    padding: 10px;
    ${'' /* background: #F2F0F0; */}
    ${'' /* box-shadow: 0px 0px 3px #F2F0F0; */}
    border: 1px solid black;
    border-radius: 3px;
`;

const Portfolio = styled.div`
    ${'' /* background: #AE9696; */}
    ${'' /* background: #ecf2f9; */}
    text-align: left;
    display: grid;
    grid-auto-columns: auto;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 1rem;
    ${'' /* @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    } */}
`;

export default HomePage;