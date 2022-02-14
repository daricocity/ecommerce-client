import { xs } from '../responsive';
import { userRequest } from '../utils';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Add from '@material-ui/icons/Add';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useEffect, useState } from 'react';
import Remove from '@material-ui/icons/Remove';
import Footer from '../components/header/Footer';
import Header from '../components/header/Header';
import StripeCheckout from 'react-stripe-checkout';

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 20px;
    ${xs({padding: '10px'})};
`;

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const Top = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
`;

const TopButton = styled.button`
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
    text-transform: uppercase;
    border: ${props => props.type === "filled" && "none"};
    color: #${props => props.type === "filled" && "ffffff"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};

    a {
        color: #000;
        text-decoration: none;
    }
`;

// const TopTexts = styled.div`
//     ${xs({display: 'none'})};
// `;

// const TopText = styled.span`
//     cursor: pointer;
//     margin: 0px 10px;
//     text-decoration: underline;
// `;

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${xs({flexDirection: 'column'})};
`;

const Info = styled.div`
    flex: 3
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${xs({flexDirection: 'column'})};
`;

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const Image = styled.img`
    width: 200px;`;

const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const ProductName = styled.span``;

// const ProductColor = styled.span`
//     height: 20px;
//     width: 20px;
//     border-radius: 50%;
//     background-color: #${props => props.color};
// `;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const ProductAmountConatiner = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${xs({margin: '5px 15px;'})};
`;

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${xs({marginBottom: '20px'})};
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
    margin-bottom: 15px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 55vh;
    ${xs({margin: '0px 10px'})};
`;

const SummaryTitle = styled.h1`
    font-weight: 200;
    text-transform: uppercase;
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type ===  "total" && "500"};
    font-sze: ${props => props.type ===  "total" && "24px"};
`;

const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const SummaryButton = styled.button`
    text-transform: uppercase;
    width: 100%;
    padding: 10px;
    background-color: #000000;
    font-weight: 600;
    color: #ffffff;
`;

const Cart = () => {
    document.title = 'Wolmart | Cart';
    const history = useHistory();
    const cart = useSelector(state => state.cart);
    const [stripeToken, setStripeToken] = useState(null);
    const onToken = (token) => {
        setStripeToken(token);
    };
    
    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post('/checkout/payment',{
                    tokenId: stripeToken.id,
                    amount: cart.total*100,
                });
                history.push('/success', {data:res.data});
            } catch (err) {
                console.log(err)
            }
        };
        stripeToken && makeRequest();
    },[stripeToken, cart.total, history])

    return (
        <Container>
            <Header/>
            <Wrapper>
                <Title>Shoping Cart</Title>
                <Top>
                    <TopButton><Link to='/products'>Continue Shopping</Link></TopButton>
                    {/* <TopTexts>
                        <TopText>
                            Shopping Bag 
                            {cart.products.map((product) => (
                                <span>({product.quantity})</span>
                            ))}
                        </TopText>
                        <TopText>Your Wishlist(0)</TopText>
                    </TopTexts> */}
                    <TopButton type="filled">Checkout Now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map((product) => (
                            <>
                            <Product key={product._id}>
                                <ProductDetail>
                                    <Image src={product.img}/>
                                    <Details>
                                        <ProductName><b>Name: </b>{product.title}</ProductName>
                                        <ProductSize><b>Price: </b>${product.price}</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountConatiner>
                                        <Remove/>
                                        <ProductAmount>{product.quantity}</ProductAmount>
                                        <Add/>
                                    </ProductAmountConatiner>
                                    <ProductPrice>${product.price*product.quantity}</ProductPrice>
                                </PriceDetail>
                            </Product>
                            <Hr/>
                            </>
                        ))}
                    </Info>
                    <Summary>
                        <SummaryTitle>Order Summary</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>${cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$6.30</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>-$4.5</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText >Total</SummaryItemText>
                            <SummaryItemPrice>${cart.total}</SummaryItemPrice>
                        </SummaryItem>
                        <StripeCheckout
                            name='LionShop'
                            image="https://avatars.githubusercontent.com/u/1486366?v=4"
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total*100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <SummaryButton>Checkout Now</SummaryButton>
                        </StripeCheckout>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer/>
        </Container>
    )
};

export default Cart;
