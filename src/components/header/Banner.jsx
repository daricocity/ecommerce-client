import styled from "styled-components";

const Container = styled.div`
    height: 100%;
    display: flex;
    min-height: 300px;
    background-image: url(/img/banner/banner2.jpg);
    background-color: #FFC74E;
    padding: 0 5rem;

    position: relative;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    overflow: hidden;

    align-items: center;
    justify-content: cenrter;
`;

const Wrapper = styled.div`
    align-items: center;
    justify-content: cenrter;

    h4 {
        margin-bottom: 0.5rem;
        font-size: 1.8em;
        letter-spacing: -0.02em;
        font-weight: 600;
    }

    h3 {
        margin-bottom: 0.5rem;
        font-size: 3em;
        color: #fff;
        letter-spacing: -0.01em !important;
        font-weight: 700;
        text-transform: uppercase !important;
    }

    button {
        padding: 1em 1.98em;
        font-size: 1.4em;
        color: #fff;
        border-color: #333;
        background-color: #333;
        border-radius: 3px;
        display: inline-block;
        border: 2px solid #333;
        outline: 0;
        line-height: 1;
        text-transform: uppercase;
        text-align: center;
        transition: color 0.3s, border-color 0.3s, background-color 0.3s, box-shadow 0.3s, -webkit-box-shadow 0.3s;
        white-space: nowrap;
        cursor: pointer;
    }
`;

const Banner = () => {
    return (
        <Container>
            <Wrapper>
                <h4>Accessories Collections</h4>
                <h3>SMART WATCHES</h3>
                <button>Discover Now</button>
            </Wrapper>
        </Container>
    )
};

export default Banner;
