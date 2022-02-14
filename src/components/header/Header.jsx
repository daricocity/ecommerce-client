import styled from "styled-components";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";

const Container = styled.header`
    font-family: 'Urbanist', sans-serif;
    background: #fff;
    color: #333;
`;

const Header = () => {
    return (
        <Container>
            <HeaderTop/>
            <HeaderMiddle/>
            <HeaderBottom/>
        </Container>
    )
};

export default Header;