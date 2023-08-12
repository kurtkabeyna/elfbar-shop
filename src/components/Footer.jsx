import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import styled from 'styled-components';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { mobile } from "../responsive";

const Container = styled.div`
display: flex;
`;
const Left = styled.div`
flex:1;
display: flex;
flex-direction: column;
padding: 20px;
`;
const Logo = styled.img`
height: 100px;
width: 130px;
cursor: pointer;
${mobile({ height: "80px", width: "100px" })}
`;
const Desc = styled.p`
margin: 20px 0px;
`;
const SocialContainer = styled.div`
display: flex;

`;
const SocialIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Right = styled.div`
flex:1;
padding-top: 20px;
    
    padding-bottom: 20px;
    padding-left: 20px;
`;
const Center = styled.div`
flex:1;
padding: 20px;
${mobile({ display: "none" })}
`;

const Title = styled.h3`
margin-bottom: 30px;
`
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
    ${mobile({ width: "200px", marginTop: "20px" })}
`;



const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo src="https://media.discordapp.net/attachments/980063993773314088/1137074031183532146/logo_transparent.png"></Logo>
                <Desc>Час роботи: ПН-СБ 10:00-20:00, НД 10:00-16:00 </Desc>

            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>

            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><MailOutlineIcon />fox-elfbar@gmail.com</ContactItem>
                <SocialContainer >
                    <SocialIcon>
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon>
                        <FacebookIcon />
                    </SocialIcon>

                    <SocialIcon>
                        < TelegramIcon />
                    </SocialIcon>
                </SocialContainer>
                <Payment src="https://media.discordapp.net/attachments/980063993773314088/1138514487570350191/Logos-01.png?width=1097&height=228" />
            </Right>

        </Container >
    )
}

export default Footer
