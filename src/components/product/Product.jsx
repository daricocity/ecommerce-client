import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Star from '@material-ui/icons/Star';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlined from '@material-ui/icons/FavoriteBorderOutlined';

const Info = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    opacity: 0;
    transition: all 0.5s ease;
`;

const Container = styled.div`
    // flex: 1;
    // margin: 5px;
    // min-width: 280px;
    // height: 350px;
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #f5fbfd;
    &:hover ${Info}{
        opacity: 1;
    }
    
    width: 215px;
    // min-width: 215px;
    height: 253px;
    :not(:last-child){
        margin-right: 20px;
    }
    margin-bottom: 100px;
`;

const Image = styled.img`
    // height: 75%;
    z-index: 2;

    width: 215px;
    height: 253px;
    object-fit: cover;
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    background-color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
    a {
        text-decoration: none;
        color: inherit;
    }
`;

const ProductDetail = styled.div`
    z-index: 10;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    justify-content: center;
    padding-top: 0.9rem;
    transition: box-shadow 0.3s, -webkit-box-shadow 0.3s;

    h4 {
        margin-bottom: 0.35rem;
        font-size: 0.9rem;
        font-weight: 500;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.2;
        color: #333;
        letter-spacing: 0;

        a {
            text-decoration: none;
            color: inherit;
        }
    }

    span {
        margin-bottom: 0.25rem;
        color: #999;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-transform: capitalize;
        font-size: 0.9rem;
    }

    p {
        color: #333;
        text-decoration: none;
        font-size: 1.0rem;
        font-weight: 600;
        letter-spacing: -0.05em;
        line-height: 1.6;
    }
`;

const RatingContainer = styled.div`
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
        font-weight: 600;
        cursor: pointer;
        font-size: 1.4rem;
    }
`;

const Product = ({item}) => {
    return (
        <>
        <Container key={item.id}>
            <Image src={item.img} alt="Image"/>
            <ProductDetail>
                <h4><Link to={`/product/${item._id}`}>{item.title}</Link></h4>
                <RatingContainer>
                    <RatingIcon>
                        <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                    </RatingIcon>
                    <span>(3 Reviews)</span>
                </RatingContainer>
                <p>${item.price}</p>
            </ProductDetail>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`}>
                        <SearchOutlined/>
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </Container>
        </>
    )
}

export default Product;
