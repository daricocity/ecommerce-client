import { xs } from '../../responsive';
import Newsletter from './Newsletter';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Room from '@material-ui/icons/Room';
import Phone from '@material-ui/icons/Phone';
import Youtube from '@material-ui/icons/YouTube';
import Twitter from '@material-ui/icons/Twitter';
import Facebook from '@material-ui/icons/Facebook';
import Pinterest from '@material-ui/icons/Pinterest';
import Instagram from '@material-ui/icons/Instagram';
import MailOutlined from '@material-ui/icons/MailOutlined';

const Container = styled.div`
    display: flex;
    ${xs({flexDirection: 'column'})};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

// Logo Styles
const Logo = styled.div`
    font-weight: bold;
    min-width: 14.4rem;
    margin-right: 2rem;
`;

const LogoImg = styled.img`
    display: block;
`;

const Desc = styled.p`
    margin: 20px 0px;
    line-height: 1.5;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: #ffffff;
    margin-right: 20px;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${xs({display: 'none'})};
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0px;
    padding: 0px;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${xs({backgroundColor: '#fff8f8'})};
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    align-items: center;
    display: flex;
`;

const Payment = styled.img`
    width: 50%
`;

const Line = styled.hr`
    width: 97%;
    margin: 0 20px;
`;

const FooterBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1.3rem;
    color: #666;
`;

const FooterBottomLeft = styled.div`
    display: flex;
    align-items: center;
    -webkit-box-align: center;
`;

const FooterBottomRight = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Footer = () => {
    return (
        <>
            <Newsletter/>
            <Container>
                <Left>
                    <Link to='/'>
                        <Logo>
                            <LogoImg src='/img/logo2.png' width="144" height="45"/>
                        </Logo>
                    </Link>
                    <Desc>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor, or randomised words which don't look even slightly believeable</Desc>
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
                </Left>
                <Center>
                    <Title>Useful Links</Title>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Cart</ListItem>
                        <ListItem>Man Fashion</ListItem>
                        <ListItem>Woman Fashion</ListItem>
                        <ListItem>Accesories</ListItem>
                        <ListItem>My Account</ListItem>
                        <ListItem>Order Tracking</ListItem>
                        <ListItem>Wishlist</ListItem>
                        <ListItem>Wishlist</ListItem>
                        <ListItem>Terms</ListItem>
                    </List>
                </Center>
                <Right>
                    <Title>Contacts</Title>
                    <ContactItem><Room style={{marginRight:'10px'}}/> 4, Kaduna Road, Ilorin, Kwara State.</ContactItem>
                    <ContactItem><Phone style={{marginRight:'10px'}}/> +2348160982568</ContactItem>
                    <ContactItem><MailOutlined style={{marginRight:'10px'}}/> contact@darl.com</ContactItem>
                </Right>
            </Container>
            <Line/>
            <FooterBottom>
                <FooterBottomLeft>
                    <p>Copyright © 2021 Wolmart Store. All Rights Reserved.</p>
                </FooterBottomLeft>
                <FooterBottomRight>
                    <span>We're using safe payment for</span>
                    <Payment src="/img/payment.png"/>
                </FooterBottomRight>
            </FooterBottom>
        </>
    )
};

export default Footer;
