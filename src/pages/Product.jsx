import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';


const Container = styled.div`
    
`;
const AddContainer = styled.div`
width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
 cursor: pointer;
 font-weight: 500;

&:hover{
    background-color: #e1ffff;
}
`;
const Description = styled.p`
    margin: 20px 0px;
`;
const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
`;
const Title = styled.div`
    font-weight: 200;
`;
const ImgContainer = styled.div`
    flex:1;
`;

const Image = styled.img`
    width: 70%;
height: 70vh;
object-fit: contain;
`;

const Price = styled.h1`
    font-weight: 100;
    font-size: 40px;
`;
const Wrapper = styled.div`
    padding: 20px;
    display: flex;
`;




const Product = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://media.discordapp.net/attachments/980063993773314088/1137087790153211911/image.png" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Одноразова Pod-система
                        Elf Bar 1500
                        COCONUT MELON`</Title>
                    <Price><b>12$</b ></Price>

                    <Description>ElfBar 1500 Coconut Melon- Комбінація яскраво виражених солодких смаків кокосу та дині допоможе відчути розслаблення та отримати задоволення. Ця ніжно-солодка суміш подарує вам незабутні відчуття.</Description>
                    <Description>Місткість батареї: 850 мАг</Description>
                    <Description>Об'єм рідини: 4,8 мл</Description>
                    <Description>5% (50 мг / мл)</Description>
                    <Description>Ресурс 1500 затяжек.</Description>
                    <AddContainer>
                        <AmountContainer>
                            <RemoveIcon />
                            <Amount>1</Amount>
                            <AddIcon />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product
