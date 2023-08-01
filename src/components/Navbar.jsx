import React from 'react';
import styled from 'styled-components'
import { Search } from '@mui/icons-material';
// import logo from './src/assets/logo.png';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Container = styled.div`
height: 60px;

`
const MenuItem = styled.div`
font-style: 14px;
cursor:pointer;
margin-left: 25px;
`

const Wrapper = styled.div`
  align-items: center;
  padding:10px 20px ;
  display: flex;
  justify-content: space-between;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;        
`
const SearchContainer = styled.div`
 border:0.5px solid lightslategray;
 margin-left: 25px;
 padding: 5px;
 display: flex;
 align-items: center;
 font-size: 15px;
`
const Input = styled.input`
border:2px;
`

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;
const Center = styled.div`
flex: 1;
text-align: center;
`;

const Logo = styled.img`
   height: 100px;
   width: 100px;
`;
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: "gray", fontSize: 16 }} />

                    </SearchContainer>
                </Left>
                <Center>
                    <Logo src="https://media.discordapp.net/attachments/980063993773314088/1135981366530560151/logo.png" />
                </Center>
                <Right>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon color="action" />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
