import { useState } from "react";
import { login } from '../apiCall';
import { xs } from '../responsive';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import eyeopen from "../ico/eyeopen.png";
import eyeclose from "../ico/eyeclose.png";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
    width: 100%;
    display: flex;
    min-height: 100vh;
    padding: 50px 20px;
    align-items: center;
    box-sizing: border-box;
    justify-content: center;
    background-color: #F4F5FA;

    // height: 100vh;
    // width: 100vw;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // background-size: cover;
    // background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('img/b2.jpg') center;
`;

const Wrapper = styled.div`
    max-width: 400px;
    margin: 0 auto;
    ${xs({width: '75%'})};

    // padding: 20px;
    // width: 25%;
    // background-color: #ffffff;
    // ${xs({width: '75%'})};
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    text-transform: uppercase;

    font-size: 26px;
    text-align: center;
    margin-bottom: 50px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    width: 100%;
    // min-width: 40%;
    padding: 10px;
    margin: 10px 0px;
`;

const InputContainer = styled.div`
    position: relative;
    img {
        position: absolute;
        right: 0px;
        top: 50%;
        transform: translateY(-50%);
    }
`;

const Button = styled.button`
    width: 100%;
    padding: 15px 20px;
    border: none;
    outline: none;
    cursor: pointer;
    color: #ffffff;
    background: teal;
    border-radius: 6px;
    text-transform: uppercase;
    margin-bottom: 10px;
    &:disabled{
        color: #ccc;
        cursor: not-allowed;
    }
`;

const Linked = styled(Link)`
    font-size: 12px;
    margin: 5px 0px;
    color: #666;
    text-decoration: underline;
    text-transform: uppercase;
`;

const Error = styled.span`
  color: red;
`;

const Logo = styled.img`
    width: 238px;
    height: 70px;
`;

const Login = () => {
    document.title = 'Wolmart | Login';
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [ showPassword, setShowPassword ] = useState(false);
    const { isFetching, error } = useSelector(state => state.user);
    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, {username, password});
    };
    return (
        <Container>
            <Wrapper>
                <Link to='/'><Logo src='/img/logo2.png' /></Link>
                <Title>Sign In</Title>
                <Form>
                    <Input
                        placeholder="username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <InputContainer>
                        <Input
                            placeholder="password"
                            // type="password"
                            type={!showPassword ? 'password' : 'text'}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete='new-password'
                            name="password" 
                        />
                        <img src={!showPassword ? eyeopen : eyeclose} onClick={() => setShowPassword(!showPassword)} alt="closeing" />
                    </InputContainer>
                    
                    <Button onClick={handleClick} disabled={isFetching}>LOGIN</Button>
                    {error && <Error>Something went wrong...</Error>}
                    <Linked to='#!'>DO NOT YOU REMEMBER THE PASSWORD?</Linked>
                    <Linked to='/register'>CREATE A NEW ACCOUNT</Linked>
                </Form>
            </Wrapper>
        </Container>
    )
};

export default Login;
