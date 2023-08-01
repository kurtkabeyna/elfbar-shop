import styled from 'styled-components'
import React from 'react'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { lightBlue } from '@mui/material/colors';

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;
`

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color:lightgrey;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity: 0.5;

`

const Wrapper = styled.div`
    height: 100%;
    display: flex;

`
const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: ${props => props.bg};

`;

const ImageContainer = styled.div`
flex: 1;
`;

const Image = styled.img`
    height: 490px;
margin-left: 50px;
`

const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`;

const Title = styled.h1`
font-size: 70px;
`;
const Description = styled.p`
margin: 35px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 2.6px;
`;
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`;
const Slider = () => {
    return (
        <div>
            <Container>
                <Arrow direction="left">
                    <ArrowLeftOutlinedIcon />
                </Arrow>
                <Wrapper>
                    <Slide bg="#f5fafd">
                        <ImageContainer>
                            <Image src="https://media.discordapp.net/attachments/980063993773314088/1135987221359501383/banner1.png?width=701&height=701" />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>SUMMER SALE</Title>
                            <Description>GET FLAT 10% OFF FOR NEW ELF-BAR</Description>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                    <Slide bg="#fcf1ed">
                        <ImageContainer>
                            <Image src="https://media.discordapp.net/attachments/980063993773314088/1135987221359501383/banner1.png?width=701&height=701" />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>NEW</Title>
                            <Description>TRY NEW TASTES</Description>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                    <Slide bg="#fcf1ed">
                        <ImageContainer>
                            <Image src="https://cdn.discordapp.com/attachments/980063993773314088/1135990309784924160/ELF-BAR-BC5000.png" />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>ELF BAR BC5000</Title>
                            <Description>GET FLAT 10% OFF FOR NEW ELF-BAR</Description>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                    <Slide bg="#fcf1ed">
                        <ImageContainer>
                            <Image src="https://media.discordapp.net/attachments/980063993773314088/1135987221359501383/banner1.png?width=701&height=701" />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>SUMMER SALE</Title>
                            <Description>GET FLAT 10% OFF FOR NEW ELF-BAR</Description>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                </Wrapper>
                <Arrow direction="right">
                    <ArrowRightOutlinedIcon />
                </Arrow>

            </Container>
        </div>
    )
}

export default Slider
