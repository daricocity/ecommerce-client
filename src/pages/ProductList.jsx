import { useState } from 'react';
import { xs } from '../responsive';
import styled from 'styled-components';
import { useLocation } from "react-router";
import Banner from '../components/header/Banner'
import Footer from '../components/header/Footer';
import Header from '../components/header/Header';
import Products from '../components/product/Products';

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${xs({
        margin: '0px 20px',
        display: 'flex',
        flexDirection: 'column'
    })};
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${xs({marginRight: '0px'})};
`;

const Select = styled.select`
    margin-right: 20px;
    padding: 10px;
    ${xs({margin: '10px 0px'})};

    max-width: none;
    width: 15.4rem;
    padding: 0.75em 2.7rem 0.75em 1.4rem;
    border-radius: 0.3rem;
    cursor: pointer;
    border: 1px solid #d7d7d7;

    color: inherit;
    background-color: transparent;
    font-size: 1rem;
    font-family: inherit;
    letter-spacing: inherit;
    z-index: 1;
`;

const Option = styled.option``;

const ProductList = () => {
    document.title = 'Wolmart | Products';
    const location = useLocation();
    const cat = location.pathname.split('/')[2]
    const [filters, setFilter] = useState({});
    const [sort, setSort] = useState('newest');

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilter({
            ...filters,
            [e.target.name]: value,
        });
    };
    return (
        <Container>
            <Header/>
            <Banner/>
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter:</FilterText>
                    <Select name='color' onChange={handleFilters}>
                        <Option disabled>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name='size' onChange={handleFilters}>
                        <Option disabled>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value='newest'>Newest</Option>
                        <Option value='acs'>Price(asc)</Option>
                        <Option value='desc'>Price(desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort}/>
            <Footer/>
        </Container>
    )
};

export default ProductList;
