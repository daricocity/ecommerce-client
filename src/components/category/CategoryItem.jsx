import styled from "styled-components"
import { xs } from '../../responsive';
import {Link} from 'react-router-dom';

const Container = styled.div`
    flex: 1;
    margin: 10px;
    position: relative;
    // height: 70vh;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    ${xs({height: '30vh'})};
`;

const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

const Title = styled.h1`
    color: #666;
    font-size: 1.2rem;
    line-height: 1.45;
    text-transform: capitalize;
    font-weight: 600;
    text-align: center;
    margin-top: 60%;
`;

// const Button = styled.button`
//     padding: 10px;
//     border: none;
//     color: gray;
//     cursor: pointer;
//     background-color: #ffffff;
//     font-weight: 600;
//     text-transform: uppercase;
// `;

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Link to={`/products/${item.cat}`}>
                <Image src={item.img}/>
                <Info>
                    <Title>{item.title}</Title>
                    {/* <Button>Shop Now</Button> */}
                </Info>
            </Link>
        </Container>
    )
}

export default CategoryItem
