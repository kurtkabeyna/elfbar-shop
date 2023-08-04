import React from 'react';
import styled from 'styled-components';
import { categories } from "../data";
import CategoryItem from './CategoryItem';


const Container = styled.div`
margin-left: 280px;

display: inline-block;
padding: 20px;
justify-content: center;
align-items: center;
`

const Categories = () => {
    return (
        <Container>
            {categories.map((item) => (
                <CategoryItem item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Categories
