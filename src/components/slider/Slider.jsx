import { useState } from "react";
import { xs } from '../../responsive';
import styled from "styled-components";
import { sliderItems } from '../../data';
import ArrowLeftOutlined from '@material-ui/icons/ArrowLeftOutlined';
import ArrowRightOutlined from '@material-ui/icons/ArrowRightOutlined';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    ${xs({display: 'block'})};
    // height: 100vh;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    max-height: 555px;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};
    background-image: url(${props => props.b_img});
`;

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`;

const Image = styled.img`
    height: 100%;
    width: 729px;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size: 20px;
    text-align: right;
    color: #666;
`;

const Desc = styled.p`
    margin: 10px 0px;
    font-size: ${props => props.id === 1 ? '3.2em' : '2.2em'};
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    text-align: right;
    line-height: 1.13;
    color: #336699;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 12px;
    cursor: pointer;
    background-color: transparent;
    text-transform: uppercase;
    border-radius: 5px;
    border: 2px solid #333;
    float: right;
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick('left')}>
                <ArrowLeftOutlined/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                    <Slide key={item.id} bg={item.bg} b_img={item.b_img}>
                        <ImgContainer>
                            <Image src={item.img}/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc id={item.id}>{item.desc}</Desc>
                            <Button>Shop Now</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick('right')}>
                <ArrowRightOutlined/>
            </Arrow>
        </Container>
    )
}

export default Slider;
