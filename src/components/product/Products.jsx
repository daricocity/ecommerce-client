import Product from './Product';
import { xs } from '../../responsive';
import styled from 'styled-components';
import { publicRequest } from '../../utils';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';

const Container = styled.div`
    margin: 2rem 0 0.8rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 2.5rem !important;
    padding-bottom: 3.5rem !important;
    padding-right: 1.5rem !important;
    padding-left: 1.5rem !important;
    ${xs({paddingLeft: '5.5rem', paddingRight: '5.5rem'})};

    h2 {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        -webkit-box-align: center;
        align-items: center;
        text-align: center;
        font-size: 2rem;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 2.0rem !important;
    }
`;

const ProContainer = styled.div`
    display: flex;
    padding: 0 0 0 30px;
    flex-wrap: wrap;
    justify-contents: space-between;
`;

const Products = ({cat, filters, sort, productsHome}) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setfilteredProducts] = useState([]);

    // Get Products
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await publicRequest.get(cat ? `/products?categories=${cat}` : '/products');
                setProducts(res.data)
            } catch (err) {
                console.log(err)
            }
        };
        getProducts();
    },[cat])

    // Filter Product
    useEffect(() => {
        cat && setfilteredProducts(
            products.filter((item) => Object.entries(filters).every(([key, value]) => item[key].includes(value)))
        );
    },[cat, filters, products])

    // Sort Product
    useEffect(() => {
        if((sort === 'newest')){
            setfilteredProducts((prev) => [...prev].sort((a,b) => a.createdAt - b.createdAt))
        } else if((sort === 'asc')){
            setfilteredProducts((prev) => [...prev].sort((a,b) => a.price - b.price))
        } else {
            setfilteredProducts((prev) => [...prev].sort((a,b) => b.createdAt - a.createdAt))
        }
    },[sort])

    return (
        <Container>
            {productsHome && <h2 className="">Popular Products</h2>}
            {products.length > 0 ? (
                <ProContainer>
                    {cat ? filteredProducts.map(
                        (item) => <Product item={item} key={item._id}/>
                    ) : products.slice(0.8).map(
                        (item) => <Product item={item} key={item._id}/>
                    )}
                </ProContainer>
            ) : (
                <div style={{
                    height: "20vh",
                    width: "100%",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: 'transparent'
                }}>
                    <CircularProgress />
                </div>
            )}
            
        </Container>
    )
}

export default Products;
