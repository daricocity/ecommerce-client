import { lg } from '../../responsive';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { MenuOnClickOutside } from '../../utils';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';

// Header Conatiner Styles
const Headerbottom = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    color: #333;
    background: #fff;
    font-size: 1.4rem;
    font-weight: 600;
    letter-spacing: -0.025em;
    ${lg({display: 'none'})};
    border-bottom: 1px solid #eee;
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

const Innerwrap = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
`;

// Header Left Styles
const Headerleft = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    -webkit-box-flex: 2;
    -ms-flex: 2;
    flex: 2;
`;

const Dropdown = styled.div`
    position: relative;
    
`;

const Togglebutton = styled(Link)`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-decoration: none;

    line-height: 1.9;

    border-left: 1px solid #eee;
    border-right: 1px solid #eee;

    background-color: #f1f1f1;
    min-width: 14rem;
    padding: 0.75rem 0.7rem;
    letter-spacing: -0.025em;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    text-transform: capitalize;

    span {
        -webkit-box-flex: 1;
        flex: 1;
        margin-left: 0.5rem;
        text-transform: uppercase;
        color: #333 !important;
        cursor: pointer;
        font-size: 0.85rem;
    }

    &::after {
        display: inline-block;
        margin-left: 6px;
        content: "";
        font-family: "Font Awesome 5 Free";
        font-size: 8px;
        font-weight: 900;
    }
`;

const TogglebuttonIcon = styled(FormatListBulletedIcon)`
    margin-bottom: 0.1rem;
    font-size: 0.55rem;
    line-height: 0;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    -webkit-font-smoothing: antialiased;
`;

const Dropdownbox = styled.div`
    position: absolute;
    right: 0;
    top: -9999px;
    padding: 0.5rem 0;
    color: #666;
    background-color: #fff;
    -webkit-box-shadow: 0 4px 20px -8px rgba(0, 0, 0, 0.3);
    box-shadow: 0 4px 20px -8px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    visibility: hidden;
    opacity: 0;
    -webkit-transition: -webkit-transform 0.2s ease-out;
    transition: -webkit-transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
    transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
`;

const MenuList = styled.ul`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`;

const MenuListItem = styled.li`
    position: relative;
    text-decoration: none;
    list-style-type: none;
    cursor: pointer;
`;

const MenuListItemLink = styled(Link)`
    font-weight: 600;
    letter-spacing: -0.009em;
    position: relative;
    font-weight: 600;
    font-size: 0.95rem;
    line-height: 1.1;
    color: #333;
    margin-right: 20px;

    display: inline-block;
    text-decoration: none;

    &:active, &:hover {
        color: #336699;
    }

    &::before {
        content: "";
        position: absolute;
        left: 0;
        margin-top: 17px;
        width: 100%;
        border-top: 3px solid;
        border-color: inherit;
        -webkit-transform-origin: right center;
        transform-origin: right center;
        -webkit-transform: scale(0, 1);
        transform: scale(0, 1);
        -webkit-transition: -webkit-transform 0.3s ease;
        transition: -webkit-transform 0.3s ease;
        transition: transform 0.3s ease;
        transition: transform 0.3s ease, -webkit-transform 0.3s ease;
    }
`;

const MainNav = styled.nav`
    // margin-left: 7.1rem;
`;

// Header Right Styles
const Headerright = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    padding-right: 0.2rem;
`;

const JustLink = styled(Link)`
    font-size: 0.95rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    color: #333;

    &:first-child {
        margin-right: 2.2rem;
    }
`;

const HeaderBottom = () => {
    const menuNode = useRef();
    const [openMenu, setOpenMenu] = useState(false);
    MenuOnClickOutside(menuNode, () => setOpenMenu(false));
    return (
        <Headerbottom>
            <Container>
                <Innerwrap>
                    <Headerleft className='flex_1'>
                        <Dropdown>
                            <div ref={menuNode}>
                                <Togglebutton to='#' open={openMenu} onClick={() => setOpenMenu(!openMenu)}>
                                    <TogglebuttonIcon/>
                                    <span>Browse Categories</span>
                                </Togglebutton>
                                <Dropdownbox open={openMenu}>
                                    <MenuList className='menu verticalMenu categoryMenu'>
                                        <li>
                                            <Link to='#'>Healthy & Beauty</Link>
                                        </li>
                                        <li>
                                            <Link to='#'>Gift Ideas</Link>
                                        </li>
                                        <li>
                                            <Link to='#'>Toy & Games</Link>
                                        </li>
                                        <li>
                                            <Link to='#'>Cooking</Link>
                                        </li>
                                        <li>
                                            <Link to='#'>Smart Phones</Link>
                                        </li>
                                        <li>
                                            <Link to='#'>Cameras & Photo</Link>
                                        </li>
                                        <li>
                                            <Link to='#'>Accessories</Link>
                                        </li>
                                        <li>
                                            <Link to='#'>Furniture</Link>
                                        </li>
                                    </MenuList>
                                </Dropdownbox>
                            </div>
                        </Dropdown>
                        <MainNav>
                            <MenuList>
                                <MenuListItem>
                                    <MenuListItemLink to='/'>Home</MenuListItemLink>
                                    <MenuListItemLink to='/products'>Shop</MenuListItemLink>
                                    <MenuListItemLink to='#'>About</MenuListItemLink>
                                    <MenuListItemLink to='#'>Contact</MenuListItemLink>
                                    <MenuListItemLink to='#'>Blog</MenuListItemLink>
                                </MenuListItem>
                            </MenuList>
                        </MainNav>
                    </Headerleft>
                    <Headerright>
                        <JustLink to='#'><LocationOnOutlinedIcon/> Track Orders</JustLink>
                        <JustLink to='#'><LocalOfferOutlinedIcon/> Daily Deals</JustLink>
                    </Headerright>
                </Innerwrap>
            </Container>
        </Headerbottom>
    )
};

export default HeaderBottom;
