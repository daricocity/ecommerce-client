import styled from 'styled-components';
import { xs } from '../../responsive';
import Send from '@material-ui/icons/Send';

const Container = styled.div`
    padding: 1.1rem 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #336699 !important;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    margin-top: 20px;
`;

const Title = styled.h1`
    // font-size: 70px;
    // margin-bottom: 20px;
    color: #fff;
    font-size: 1.2rem;
    margin-bottom: 0.2rem;
    ${xs({fontSize: '50px'})};
`;

const Desc = styled.div`
    // font-size: 24px;
    font-size: 15px;
    font-weight: 300;
    margin-bottom: 20px;
    ${xs({textAlign: 'center'})};
`;

const InputConatiner = styled.div`
    width: 50%;
    height: 40px;
    display: flex;
    justify-content: space-between;
    background-color: #ffffff;
`;

const Input = styled.input`
    flex: 8;
    border: none;
    &:focus {
        outline: none;
    }
    display: block;
    width: 100%;
    padding: 0.85rem 2rem;
    border: 1px solid #eee;
    line-height: 1.5;
    font-weight: 400;
    color: #999;
    box-shadow: none;
    outline: 0;
    border-width: 1px 0 1px 1px;
`;

const Button = styled.button`
    flex: 1;
    border: none;
    color: #fff;
    background: teal;
`;

const Newsletter = () => {
    return (
        <Container>
            <InfoContainer>
            <Title>SUBSCRIBE TO OUR NEWSLETTER</Title>
            <Desc>Get Timely Updates from your favorite products.</Desc>
            </InfoContainer>
            <InputConatiner>
                <Input placeholder="Your Email"/>
                <Button><Send/></Button>
            </InputConatiner>
        </Container>
    )
}

export default Newsletter;
