import styled from 'styled-components'
import React, { useState } from 'react'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from "../data.js"


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
z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(-100vw);

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
    const handleClick = (direction) => {
        const [slideIndex, setSlideIndex] = useState(0);
    };
    return (
        <div>
            <Container>
                <Arrow direction="left" onClick={() => handleClick("left")}>
                    <ArrowLeftOutlinedIcon />
                </Arrow>
                <Wrapper>
                    {sliderItems.map(item => (


                        <Slide bg={item.bg}>
                            <ImageContainer>
                                <Image src={item.img} />
                            </ImageContainer>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Description>{item.desc}</Description>
                                <Button>SHOW NOW</Button>
                            </InfoContainer>
                        </Slide>
                    ))}
                </Wrapper>
                <Arrow direction="right" onClick={() => handleClick("right")}>
                    <ArrowRightOutlinedIcon />
                </Arrow>

            </Container>
        </div >
    )
}

export default Slider
