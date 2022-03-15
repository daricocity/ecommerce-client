import { lg } from '../../responsive';
import {Link} from 'react-router-dom';
import { logout } from '../../apiCall';
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';

const Headertop = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background: #f5f6f8;
    font-size: 0.75rem;
    letter-spacing: -0.027em;
    text-transform: capitalize;
`;

const Container = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: auto;
    margin-right: auto;
`;

const Headerleft = styled.div`
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
`;

const Welcomemsg = styled.p`
    margin: 0;
    font-size: 0.78rem;
    font-weight: inherit;
    letter-spacing: -0.022em;
    line-height: 1.5;
    white-space: nowrap;
    padding: 14px 0;
    text-transform: uppercase;
`;

// const Headerright = styled.div`
//     flex: 1;
//     -webkit-box-align: center;
//     -ms-flex-align: center;
//     align-items: center;
//     margin-left: auto;
//     padding-right: 0.2rem;
// `;
const Headerright = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Item = styled.div`
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 0.78rem;
    cursor: pointer;
    margin-left: 25px;
    color: #333;
    text-decoration: none;
    ${lg({ display: 'none !important'})};
`;

const Linked = styled(Link)`
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    };
`;

const HeaderTop = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    return (
        <Headertop>
            <Container>
                <Headerleft>
                    <Welcomemsg>Welcome to Wolmart Store message or remove it!</Welcomemsg>
                </Headerleft>
                <Headerright>
                    {user.currentUser ? (
                        <>
                        <Linked to='#'><Item type="show">My Account</Item></Linked>
                        <Linked to='#' onClick={() => logout(dispatch)}><Item type="show">Logout</Item></Linked>
                        </>
                    ) : (
                        <>
                        <Linked to='/login'><Item type="show">Sign In</Item></Linked>
                        <Linked to='/register'><Item type="show">Register</Item></Linked>
                        </>
                    )}
                </Headerright>
            </Container>
        </Headertop>
    )
};

export default HeaderTop;