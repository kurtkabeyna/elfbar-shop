import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';
import React from 'react';
const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const Title = styled.h1`
font-size: 70px;
margin: 20px;
`;
const Description = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
`;
const InputContainer = styled.div`

`;
const Input = styled.input`

`;
const Button = styled.button`

`;


const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favourite products.</Description>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <SendIcon />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
