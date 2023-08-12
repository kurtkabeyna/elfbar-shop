import React from 'react'
import styled from 'styled-components'
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Newsletter from "../components/Newsletter"
import Products from "../components/Products"
import Footer from "../components/Footer"
import { mobile } from '../responsive'


const Container = styled.div``;
const Filter = styled.div`
margin: 20px;
`;
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
${mobile({ marginLeft: "10px", marginTop: "70px", })}
`;
const Title = styled.h1`
margin: 20px;
`;

const FilterText = styled.span`
font-style: 20px;
font-weight: 600;
margin-right: 20px;
`;
const Select = styled.select`
padding: 10px;
margin-right: 20px;
`;
const Option = styled.option`

`;

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />

            <FilterContainer>
                <Filter>
                    <FilterText>
                        ELF BAR
                    </FilterText>
                    <Select>
                        <Option selected>1500 Poof</Option>
                        <Option>1800 Poof</Option>
                        <Option>2000 Poof</Option>
                        <Option>4000 Poof</Option>
                        <Option>5000 Poof</Option>
                        <Option>7000 Poof</Option>
                        <Option>9000 Poof</Option>

                    </Select>
                </Filter>

            </FilterContainer>
            <Products />
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList
