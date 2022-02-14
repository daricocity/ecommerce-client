import swal from 'sweetalert';
import { useState } from 'react';
import { xs } from '../responsive';
import { login } from '../apiCall';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { publicRequest } from '../utils';
import eyeopen from "../ico/eyeopen.png";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router';
import eyeclose from "../ico/eyeclose.png";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url('img/b2.jpg') center;
`;

const Wrapper = styled.div`
    padding: 20px;
    width: 30%;
    background-color: #ffffff; 
    ${xs({width: '75%'})};
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    text-transform: uppercase;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    // flex-wrap: wrap;
`;

const Input = styled.input`
    flex: 1;
    width: 90%;
    padding: 10px;
    margin: 10px 0px;
    // min-width: 40%;
    // margin: 20px 10px 0px 0px;
`;

const InputContainer = styled.div`
    position: relative;
    img {
        position: absolute;
        right: 40px;
        top: 50%;
        transform: translateY(-50%);
    }
`;

const Agreement = styled.span`
    margin: 20px 0px;
    font-size: 12px;
`;

const Button = styled.button`
    // width: 40%;
    // padding: 15px 20px;
    // border: none;
    // cursor: pointer;
    // color: #ffffff;
    // background: teal;
    // text-transform: uppercase;

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

const Error = styled.span`
  color: red;
`;

const Linked = styled(Link)`
    font-size: 12px;
    margin: 5px 0px;
    color: #666;
    text-decoration: underline;
    text-transform: uppercase;
`;

const Register = () => {
    document.title = 'Wolmart | Register';
    const history = useHistory();
    const dispatch = useDispatch();
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ RegisterData, setRegisterData ] = useState({});
    const [ showPassword, setShowPassword ] = useState(false);
    const [ showConfirmPassword, setshowConfirmPassword ] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        if(RegisterData.password !== RegisterData.confirmPassword){
            swal("Error!", "Password don't match!", "error");
            return;
        }
        const res = await publicRequest.post("/auth/register", RegisterData).catch(() => setError(e));
        if(res){
            const username = RegisterData.username
            const password = RegisterData.password
            login(dispatch, {username, password});
            history.push('/')
        };
        setLoading(false);
    };

    const onChange = (e) => {
        setRegisterData({
            ...RegisterData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Container>
            <Wrapper>
                <Title>Create an Account</Title>
                <Form>
                    <Input 
                        placeholder="Name" 
                        value={RegisterData.name}
                        onChange={onChange} 
                        name="name"
                    />
                    <Input 
                        placeholder="Last Name"
                        value={RegisterData.last_name}
                        onChange={onChange} 
                        name="last_name"
                    />
                    <Input 
                        placeholder="Username"
                        value={RegisterData.username} 
                        onChange={onChange} 
                        name="username"
                        required 
                    />
                    <Input 
                        placeholder="Email"
                        value={RegisterData.email} 
                        onChange={onChange} 
                        name="email"
                        required 
                    />
                    <InputContainer>
                        <Input 
                            name="password" 
                            onChange={onChange}
                            placeholder="Password"
                            autoComplete='new-password'
                            value={RegisterData.password}
                            type={!showPassword ? 'password' : 'text'}
                            required 
                        />
                        <img src={!showPassword ? eyeopen : eyeclose} onClick={() => setShowPassword(!showPassword)} alt="closeing" />
                    </InputContainer>
                    <InputContainer>
                        <Input
                            onChange={onChange} 
                            name="confirmPassword"  
                            autoComplete='new-password'
                            placeholder="Confirm Password"
                            value={RegisterData.confirmPassword} 
                            type={!showConfirmPassword ? 'password' : 'text'}
                            required 
                        />
                        <img src={!showConfirmPassword ? eyeopen : eyeclose} onClick={() => setshowConfirmPassword(!showConfirmPassword)} alt="closeing" />
                    </InputContainer>
                    <Agreement>By creating an account, i consent to the processing of my personal data in accordance with the <b> PRIVACY POLICY </b></Agreement>
                    <Button onClick={submit} disabled={loading}>Create</Button>
                    {error && <Error>Something went wrong...</Error>}
                    <Linked to='/login'>LOGIN TO ACCOUNT</Linked>
                </Form>
            </Wrapper> 
        </Container>
    )
};

export default Register;
