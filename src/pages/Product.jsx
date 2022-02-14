import swal from 'sweetalert';
import { xs } from '../responsive';
import styled from 'styled-components';
import { publicRequest } from '../utils';
import Add from '@material-ui/icons/Add';
import Star from '@material-ui/icons/Star';
import { useLocation } from "react-router";
import { useState, useEffect } from 'react';
import Remove from '@material-ui/icons/Remove';
import { addProduct } from '../redux/cartRedux';
import Footer from '../components/header/Footer';
import Header from '../components/header/Header';
import Youtube from '@material-ui/icons/YouTube';
import Twitter from '@material-ui/icons/Twitter';
import Facebook from '@material-ui/icons/Facebook';
import Pinterest from '@material-ui/icons/Pinterest';
import Instagram from '@material-ui/icons/Instagram';
import { CircularProgress } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

const Container = styled.div``;

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${xs({
        padding: '10px',
        flexDirection: 'column'
    })};
`;

const ImgContainer = styled.div`
    flex: 1;
`;

const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
    ${xs({height: '40vh'})};
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${xs({padding: '10px'})};
    font-size: 0.95rem;
    font-weight: normal;
    line-height: 1;
    letter-spacing: 0;
    
    .sku {
        border-bottom: 1px solid #eee;
        padding-bottom: 10px;
        margin-top: 10px;
    }

    p {
        color: #666;
    }

    span {
        color: #999;
    }
`;

const Title = styled.div`
    margin-bottom: 0.5rem;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: -0.025em;
    line-height: 1.6;
`;

const Desc = styled.div`
    margin: 20px 0px;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
`;

const Price = styled.div`
    font-size: 30px;
    font-weight: 700;
    color: #333;
    text-decoration: none;
    letter-spacing: -0.05em;
    margin-top: 15px;
`;

const RatingContainer = styled.div`
    margin-top: 10px;
    display: flex;

    span {
        color: #999;
        margin: 4px 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-transform: capitalize;
        font-size: 0.9rem;
    }
`;

const RatingIcon = styled.div`
    svg {
        color: #ffb639;
        letter-spacing: 0.1em;
        font-weight: 600;
        cursor: pointer;
        font-size: 1.4rem;

        &:last-child {
            color: #ccc;
        }
    }
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 40%;
    margin: 30px 0px;
    ${xs({width: '100%'})};
    flex-direction: column;
`;

const Filter = styled.div`
    display: flex;
    align-items: center;
    margin-right: 20px;

    :first-child {
        margin-bottom: 20px;
    }
`;

const FilterTitle = styled.span`
    font-size: 15px;
    font-weight: 200;
`;

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin: 0px 5px;
    cursor: pointer;
    background-color: ${props => props.color};
`;

const FilterSize = styled.select`
    margin-left: 10px;
    padding: 10px 5px;

    height: inherit;
    min-height: auto;
    width: 100%;
    -webkit-appearance: textfield;
    border: solid #ccc;
    border-width: 1px;
    color: #666;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between; 
    ${xs({width: '100%'})};
`;

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    
`;

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    margin: 0px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Button = styled.button`
    padding: 15px;
    border: 1px solid teal;
    backround-color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: #f8f4f4;
    }

    background-color: #eee;
    border-color: #eee;
    color: #666;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-bottom: 1rem;
    padding-left: 0;
    padding-right: 0;
    min-width: 14rem;
    margin-left: 10px;
`;

const SocialContainer = styled.div`
    display: flex;
    margin-top: 20px;
`;

const SocialIcon = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: #666;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #cdcdcd;
    &:hover {
        color: #fff;
        background-color: #${props => props.color};
    }
`;

const Product = () => {
    document.title = 'Wolmart | Product';
    const location = useLocation();
    const dispatch = useDispatch();
    const [ size, setSize ] = useState('');
    const [ color, setColor ] = useState('');
    const id = location.pathname.split('/')[2]
    const [ product, setProduct ] = useState({});
    const [ quantity, setQuantity ] = useState(1);
    const user = useSelector(state => state.user);

    // Get Product
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get('/products/find/' + id);
                setProduct(res.data);
            } catch (error) {
                console.log()
            }
        }
        getProduct();
    },[id])

    // Set Quantity
    const handleQuantity = (type) => {
        if(type === 'dec'){
            quantity > 1 && setQuantity(quantity-1);
        } else {
            setQuantity(quantity+1);
        }
    }

    // Update Cart
    const handleClick = () => {
        if(user.currentUser){
            dispatch(addProduct({...product, quantity, color, size}));
            swal({
                title: "Product:",
                icon: product.img,
                text: `${product.title} Addedd to Cart!`,
            });
        } else {
            swal("Error!", "User must login!", "error");
            window.location.href = '/login';
        }
    }

    return (
        <Container>
            <Header/>
            {product ? (
                <Wrapper>
                    <ImgContainer>
                        <Image src={product.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{product.title}</Title>
                        <p>Category: <span>Electronics</span></p>
                        <p className='sku'>SKU: <span>MS46891340</span></p>
                        <Price>${product.price}</Price>
                        <RatingContainer>
                            <RatingIcon>
                                <Star/>
                                <Star/>
                                <Star/>
                                <Star/>
                                <Star/>
                            </RatingIcon>
                            <span>(3 Reviews)</span>
                        </RatingContainer>
                        <Desc>{product.desc}</Desc>
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Color: </FilterTitle>
                                {product.color?.map((c) => (
                                    <FilterColor color={c} key={c} onClick={() => setColor(c)}/>
                                ))}
                            </Filter>
                            <Filter>
                                <FilterTitle>Size: </FilterTitle>
                                <FilterSize onChange={(e) => setSize(e.target.value)}>
                                    {product.size?.map((s) => (
                                        <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                    ))}
                                </FilterSize>
                            </Filter>
                        </FilterContainer>
                        <AddContainer>
                            <AmountContainer>
                                <Remove onClick={() => handleQuantity('dec')}/>
                                <Amount>{quantity}</Amount>
                                <Add onClick={() => handleQuantity('inc')}/>
                            </AmountContainer>
                            <Button onClick={handleClick}>Add to Cart</Button>
                        </AddContainer>
                        <SocialContainer>
                            <SocialIcon color="3b5999">
                                <Facebook/>
                            </SocialIcon>
                            <SocialIcon color="e4405f">
                                <Instagram/>
                            </SocialIcon>
                            <SocialIcon color="55acee">
                                <Twitter/>
                            </SocialIcon>
                            <SocialIcon color="2c567e">
                                <Youtube/>
                            </SocialIcon>
                            <SocialIcon color="e60023">
                                <Pinterest/>
                            </SocialIcon>
                        </SocialContainer>
                    </InfoContainer>
                </Wrapper>
            ) : (
                <div style={{
                    width: "100%",
                    height: "20vh",
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'transparent'
                }}>
                    <CircularProgress />
                </div>
            )}
            <Footer/>
        </Container>
    )
};

export default Product;
