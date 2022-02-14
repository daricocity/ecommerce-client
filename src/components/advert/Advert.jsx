import { xs } from '../../responsive';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex: 2;
    padding: 20px;
    height: 15rem;
    justify-content: space-between;
    margin: 2rem 0 0.8rem 0;
    ${xs({flexDirection: 'column', height: '30rem'})};
`;

const Banner = styled.div`
    flex: 1;
    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    font-size: 1rem;
    overflow: hidden;
    :not(.banner){
        margin-right: 20px;
        ${xs({marginRight: '0px'})};
    }
    ${xs({marginBottom: '20px'})};
    figure img {
        display: block;
        object-fit: cover;
        vertical-align: middle;
        min-height: 15rem;
    }
`;

const Content = styled.div`
    position: relative;
    z-index: 1;
    left: 6.4%;
    top: -50% !important;
    -webkit-transform: translateY(-50%) !important;
    transform: translateY(-50%) !important;
    margin-top: 0rem !important;

    ${xs({
        top: '-50% !important',
        webkitTransform: 'translateY(-50%) !important',
        transform: 'translateY(-50%) !important',
        marginTop: '-1rem !important',
    })};

    h5 {
        margin-bottom: 0.7rem;
        font-size: 1.2em;
        margin-bottom: 0.7rem;
        color: #c4c4c5;
        font-weight: normal;
        span {
            font-weight: 700;
            color: #f77c29 !important;
        }
    }

    h5.dark  {
        color: #333;
    }

    h3 {
        font-size: 1.8em;
        font-weight: 800;
        line-height: 1.2;
        text-transform: uppercase !important;
        span {
            line-height: 1.4;
            font-weight: 400 !important;
            text-transform: capitalize !important;
        }
    }

    .light {
        color: #fff;        
    }

    p span {
        color: #f77c29 !important;
    }

    p {
        font-size: 1.0em;
        margin-top: 20px;
    }
`;


const Advert = () => {
    return (
        <Container>
            <Banner>
                <figure>
                    <img src="/img/banner/1-1.jpg" alt="Category Banner"  width="610" height="160" />
                </figure>
                <Content>
                    <h5 className='dark'>Get up to <span>20% Off</span></h5>
                    <h3>Sports Outfit <br/><span>Collection</span></h3>
                    <p>Starting at <span>$667</span></p>
                </Content>
            </Banner>
            <Banner className='banner'>
                <figure>
                    <img src="/img/banner/1-2.jpg" alt="Category Banner"  width="610" height="160" />
                </figure>
                <Content>
                    <h5>New Arrivals</h5>
                    <h3 className='light'>Accessories<br/> <span>Collection</span></h3>
                    <p className='light'>Only From <span>$99</span></p>
                </Content>
            </Banner>
        </Container>
    )
}

export default Advert
