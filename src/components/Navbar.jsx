import React from 'react';
import styled from 'styled-components'
import { Search } from '@mui/icons-material';
// import logo from './src/assets/logo.png';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive';
import PersonIcon from '@mui/icons-material/Person';

const Container = styled.div`
height: 100px;
${mobile({ height: "30px" })}

`;
const MenuItem = styled.div`
    font-size: 20px;
cursor:pointer;
margin-left: 25px;
margin-bottom: 30px;
margin-right: 30px;
${mobile({ fontSize: "12px", marginLeft: "0px", marginRight: '20px', marginTop: '20px' })}
`;
const Hr = styled.div`
    display: none;
    unicode-bidi: isolate;
    -webkit-margin-before: 0.5em;
    -webkit-margin-after: 0.5em;
    -webkit-margin-start: auto;
    -webkit-margin-end: auto;
    overflow: hidden;
    border-style: inset;
    border-width: 1px;
    width: 100%;
    ${mobile({ display: "block" })}
    `;


const Wrapper = styled.div`
  align-items: center;
  padding:10px 20px ;
  display: flex;
  justify-content: space-between;
  ${mobile({ padding: "5px 0px" })}
`;
const Language = styled.span`
    font-size: 17px;
    cursor: pointer;       
    ${mobile({ display: "none" })}
    margin-bottom: 30px;
margin-left: 15px;
`;
const SearchContainer = styled.div`
 border:0.5px solid lightslategray;
 margin-left: 35px;
 padding: 5px;
 display: flex;
 align-items: center;
 font-size: 15px;
 margin-bottom: 30px;
 ${mobile({ marginLeft: "10px", marginTop: '20px' })}
 
`;
const Input = styled.input`
border:2px;
${mobile({ width: "60px" })}
`;

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
   ${mobile({ height: "70px", marginLeft: "42px" })}
cursor:pointer;
   `;
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, marginLeft: "10px" })}
`;

const Navbar = () => {
    return (
        <Container>

            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search' />
                        <Search style={{ color: "gray", fontSize: 16 }} />

                    </SearchContainer>
                </Left>
                <Center>
                    <Logo src="https://media.discordapp.net/attachments/980063993773314088/1137074031183532146/logo_transparent.png" />
                </Center>
                <Right>

                    <MenuItem>
                        <PersonIcon color="action" />
                    </MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon color="action" />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
            <Hr />
        </Container>
    )
}

export default Navbar
