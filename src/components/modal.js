import React from 'react';
import styled from 'styled-components';

const Modal = ({ show, onClose, children, mainImage }) => {

    if (show) {
        return (
        <StyledBackground>
            <div className="footer">
            <StyledButton onClick={onClose}>
                Close
            </StyledButton>
            </div>
            <StyledImage src={mainImage} />
            <ContentDiv>
                {children}
            </ContentDiv>
        </StyledBackground>
        );
    } else {
        return null;
    }
}
const ContentDiv = styled.div`
    margin-top: 50px;
    margin-right: 10px;
    margin-left: 10px;
    text-align: left;
    font-family: Tajawal;
`;

const StyledImage = styled.img`
    margin-top: 35px;
    max-width: 70%;
`;

const StyledBackground = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -300px;
    margin-left: -275px;
    width: 550px;
    height: 600px;
    background-color: #E6D2D2;
    border: 1px solid #D0C6C6;
    box-shadow: 1px 1px 1px #D0C6C6;
    border-radius: 10px;
`;

const StyledButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};
    border: 2px solid palevioletred;
    border-radius: 5px;
    padding: 0.25em 1em;
    &:hover {
    cursor: pointer;
    }
`;


export default Modal;
