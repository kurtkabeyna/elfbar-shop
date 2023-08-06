import React from 'react';
import styled from 'styled-components';
import { products } from "../data";
import Product from './Product';


const Container = styled.div`
margin-left: 280px;
display: inline-block;
padding: 20px;
justify-content: space-between;
align-items: center;
`

const TitleProducts = styled.h1`
    margin-top: 50px;
    margin-bottom: 150px;
    align-items: center;
    justify-content: center;
    display: flex;
    font-size: 64px;
    margin-left: 22%;
  margin-right: 38%;
    
`

const Products = () => {
    return (
        <Container>
            <TitleProducts>
                ELFBAR Products
            </TitleProducts>
            {products.map((item) => (
                <Product item={item} key={item.id} />
            ))}
        </Container>
    );
};

export default Products;
