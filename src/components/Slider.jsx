import styled from 'styled-components'
import React, { useState } from 'react'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import { sliderItems } from "../data";
import { mobile } from '../responsive';


const Container = styled.div`
width: 100%;
height: 60vh;
display: flex;
position: relative;
overflow: hidden;
${mobile({ display: "none" })}
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
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);

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
height: 480px;
margin-left: 200px;
margin-bottom: 250px;
height: 600px;
`

const InfoContainer = styled.div`
flex: 1;
padding: 50px;
margin-bottom: 100px;
margin-left: 300px;
`;
const Hr = styled.div`
    display: block;
    unicode-bidi: isolate;
    -webkit-margin-before: 0.5em;
    -webkit-margin-after: 0.5em;
    -webkit-margin-start: auto;
    -webkit-margin-end: auto;
    overflow: hidden;
    border-style: inset;
    border-width: 1px;
    width: 100%;
    ${mobile({ display: "none" })};
    `;
const Title = styled.h1`
font-size: 70px;
margin-bottom: 50px;
`;
const Description = styled.p`
margin: 35px 0px;
font-size: 25px;
font-weight: 500;
letter-spacing: 2.6px;
`;
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor:pointer;
margin-bottom: 150px;
`;
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {

        if (direction === "left") {
            setSlideIndex(slideIndex > 0
                ? slideIndex - 1
                : 2);
        } else {
            setSlideIndex(slideIndex < 2
                ? slideIndex + 1
                : 0);
        }
    };
    return (
        <div>
            < Hr />
            <Container>
                <Arrow direction="left" onClick={() => handleClick("left")}>
                    <ArrowLeftOutlinedIcon />
                </Arrow>
                <Wrapper slideIndex={slideIndex}>
                    {sliderItems.map(item => (
                        <Slide bg={item.bg} key={item.id}>
                            <ImageContainer>
                                <Image src={item.img} />
                            </ImageContainer>
                            <InfoContainer>
                                <Title>{item.title}</Title>
                                <Description>{item.desc}</Description>
                                <Description style={{ color: "red", fontSize: 16 }}>{item.underdesc}</Description>
                                <Button>SHOW NOW</Button>
                            </InfoContainer>
                        </Slide>
                    ))}

                </Wrapper>

                <Arrow direction="right" onClick={() => handleClick("right")}>
                    <ArrowRightOutlinedIcon />
                </Arrow>

            </Container>
            < Hr />
        </div >
    )
}

export default Slider
