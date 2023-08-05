import React from 'react'
import styled from 'styled-components'
import { products } from '../data'
import Products from './Products'

const Container = styled.div`
flex: 1;
display: inline-block;
justify-content: center;
align-items: center;
margin: 3px;
position: relative;

`
const Image = styled.img`
width:250px;
`
const Info = styled.div`
display: flex;
justify-content: center;
position: absolute;
`
const Title = styled.h1`
font-size: 20px;
`
const Button = styled.button`
background-color: #efebeb;
border:none;
width : 262px;
height: 500px;
border-top-left-radius:11px;
border-top-right-radius :11px;
border-bottom-left-radius:11px;
border-bottom-right-radius:11px;
cursor:pointer;

`

const Product = ({ item }) => {
    return (
        <Container>
            {products.map((item) => (
                <Products item={item} key={item.id} />
            ))}
            <Button>
                <Image src={item.img} />
                < Info >
                    <Title>{item.title}</Title>
                </Info>
            </Button>

        </Container >
    )
}

export default Product
