import React from 'react'
import styled from 'styled-components'
import { ShoppingCartOutlined, FavoriteBorderOutlined } from '@mui/icons-material'
import { mobile } from '../responsive'


const ProductInside = styled.div`
opacity :1;
background-color: #eaf1f1;
border:none;
width : 262px;
height: 505px;
border-top-left-radius:11px;
border-top-right-radius :11px;
border-bottom-left-radius:11px;
border-bottom-right-radius:11px;
${mobile({ width: "154px", height: "350px" })}

  
`
const Info = styled.div`
display: flex;
justify-content: center;
position: absolute;
margin-left: 17px;

`
const Container = styled.div`
flex: 1;

display: inline-block;
justify-content: center;
align-items: center;
margin: 5px;
position: relative;
flex-wrap: wrap;

&:hover ${ProductInside}{
  background-color: #d1cdca;
    opacity:0.8;
    
}
`;
const Image = styled.img`
width:250px;
${mobile({ width: "150px" })}
`

const Title = styled.h1`
font-size: 18px;
margin-right: 5px;
${mobile({ fontSize: "13px" })}

`
const Button = styled.button`
background-color: transparent;
border:none;
width : 192px;
height: 95px;
margin-right: 39px;
border-top-left-radius:11px;
border-top-right-radius :11px;
border-bottom-left-radius:11px;
border-bottom-right-radius:11px;
cursor:pointer;
${mobile({ width: "154px", height: "106px", })}
`
const ButtonImg = styled.button`
background-color: transparent;
border:none;
width : 192px;
height: 95px;
margin-right: 39px;
border-top-left-radius:11px;
border-top-right-radius :11px;
border-bottom-left-radius:11px;
border-bottom-right-radius:11px;
cursor:pointer;
${mobile({ width: "154px", height: "200px", })}
`
const Icon = styled.div`
padding: 4px;
  width: 100px;
  height: 60px;
  border-radius: 15%;
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content:center ;
  margin-top: 20px;
  margin-right: 10px;
  transition: all 0.5s ease;
  ${mobile({ width: "40px" })}
  &:hover {
    background-color: #ffdbc2;
    transform: scale(1.1);
  }
`
const IconFav = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 4px;
  transition: all 0.5s ease;
  ${mobile({ width: "30px", height: "30px" })}
  &:hover {
    background-color: #ffe2e2;
    transform: scale(1.1);
  }
`


const Product = ({ item }) => {
  return (

    <Container>

      <ProductInside>

        <IconFav>
          <FavoriteBorderOutlined />
        </IconFav>
        <ButtonImg>


          <Image src={item.img} />
        </ButtonImg>
        < Info >
          <Title>{item.title}</Title>
          <Icon>
            <ShoppingCartOutlined />
          </Icon>
        </Info>
        <Button>

        </Button>
      </ProductInside >

    </Container >
  );
};

export default Product;
