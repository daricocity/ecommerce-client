import { xs } from '../../responsive';
import styled from "styled-components";
import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';
import LocalShippingOutlinedIcon from '@material-ui/icons/LocalShippingOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';

const Container = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0 0 0 20px;
`;

const ContainerWrapper = styled.div`

    border: 1px solid #eee;
    padding: 1.3rem 0 1.2rem;
    margin: 2rem 0 0.8rem 0;

    border-radius: 0.5rem !important;
    overflow: hidden !important;
    display: flex;
    ${xs({padding: '1.3rem 0 1.3rem 0'})};
    
`;

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    box-sizing: border-box;
    transition-property: transform;
    ${xs({flexDirection: 'column'})};
`;

const ValueContent = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-shrink: 0;
    width: 300px;
    // height: 100%;
    position: relative;
    transition-property: transform;
    ${xs({
        marginBottom: '10px', 
        justifyContent: 'left', 
        paddingLeft: '18%'
    })};

    span {
        margin-right: 0.8rem;
        margin-bottom: 0;
        display: inline-block;

        .icon {
            font-size: 2.9rem;
            color: #336699;
            display: inline-block;
            vertical-align: middle;
            font-weight: 400;
            line-height: 1;
            -webkit-font-smoothing: antialiased;
        }
    }
`;

const Content = styled.div`
    text-align: start;

    h4 {
        font-size: 0.9rem;
        text-transform: capitalize;
        letter-spacing: -0.025em;
        margin-bottom: 0.2rem !important;
        font-weight: 600 !important;
        line-height: 1.2;
        color: #333;
    }

    p {
        line-height: 1;
        font-size: 0.85rem;
        word-break: break-word;
        margin: 0;
        color: #666 !important;
    }
`;


const Value = () => {
    return (
        <Container>
            <ContainerWrapper>
                <Wrapper>
                    <ValueContent>
                        <span>
                            <LocalShippingOutlinedIcon className='icon'/>
                        </span>
                        <Content>
                            <h4>Free Shipping & Returns</h4>
                            <p>For all orders over $99</p>
                        </Content>
                    </ValueContent>
                    <ValueContent>
                        <span>
                            <BusinessCenterOutlinedIcon className='icon'/>
                        </span>
                        <Content>
                            <h4>Secure Payment</h4>
                            <p>We ensure secure payment</p>
                        </Content>
                    </ValueContent>
                    <ValueContent>
                        <span>
                            <AccountBalanceWalletOutlinedIcon className='icon'/>
                        </span>
                        <Content>
                            <h4>Money Back Guarantee</h4>
                            <p>Any back within 30 days</p>
                        </Content>
                    </ValueContent>
                    <ValueContent>
                        <span>
                            <ForumOutlinedIcon className='icon'/>
                        </span>
                        <Content>
                            <h4>Customer Support</h4>
                            <p>Call or email us</p>
                        </Content>
                    </ValueContent>
                </Wrapper>
            </ContainerWrapper>
        </Container>
    )
}

export default Value;
