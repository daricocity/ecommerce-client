import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import Badge from '@material-ui/core/Badge';
import Close from '@material-ui/icons/Close';
import { MenuList } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import { MenuOnClickOutside, CartOnClickOutside } from '../../utils';
import CompareOutlinedIcon from '@material-ui/icons/CompareOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import { lg, md, xs, sm, md_min, lg_min, min_992_and_max_1100, min_769_and_max_991 } from '../../responsive';

// Header Conatiner Styles
const Headermiddle = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-top: 2.0rem;
    padding-bottom: 2.0rem;
    color: #333;
    background: #fff;
    font-size: 0.75rem;
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

const Headerleft = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;

    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
`;

const Linked = styled(Link)`
    min-width: 14.4rem;
    margin-right: 2rem;
    ${lg({ marginLeft:'2rem' })};
    ${xs({ margin: '0 auto' })};
`;

// Mobile Menu Styles
const MobileMenuNav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #222;
    text-align: left;
    padding: 2rem 1.5rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    max-width: 246px;
    padding: 2rem 1.5rem;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    z-index: 10;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-100%)'};
    
    -webkit-box-shadow: 1px 0 5px rgba(0, 0, 0, 0.5);
    box-shadow: 1px 0 5px rgba(0, 0, 0, 0.5);
    -webkit-transition: -webkit-transform 0.4s;
    transition: -webkit-transform 0.4s;
    transition: transform 0.4s;
    transition: transform 0.4s, -webkit-transform 0.4s;

    a {
        font-size: 2rem;
        text-transform: uppercase;
        padding: 2rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        color: blue;
        text-decoration: none;
        transition: color 0.3s linear;
    }
`;

const MobileMenuBurgerButton = styled.button`
    position: absolute;
    top: 12.9%;
    ${xs({top: '13.9%'})};
    left: 2rem;
    flex-direction: column;
    justify-content: space-around;
    background: transparent;
    padding: 0;
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    cursor: pointer;
    z-index: 10;
    display: none!important;
    ${lg({display: 'flex!important'})};
    &:focus {
        outline: none;
    }
    div {
        width: 1.8rem;
        height: 0.19rem;
        background: #333;
        border-radius: 10px;
        transition: all 0.3s linear;
        position: relative;
        transoform-origin: 1px;

        :first-child {
            transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }
        :nth-child(2) {
            opacity: ${({open}) => open ? '0' : '1'};
            transform: ${({open}) => open ? 'translateX(20px)' : 'translateX(0)'};
        }
        :nth-child(3) {
            transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

const MobileMenuForm = styled.form`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 3rem;
    margin-top: -20rem;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
`;

const MobileMenuFormInput = styled.input`
    min-height: 1rem;
    padding: 0.9rem 0.7rem;
    color: #777;
    border: 1px solid #333;
    border-right: 0;
    background-color: transparent;
    font-size: 0.79rem;
    border-radius: 0.3rem 0 0 0.3rem;
    &:focus {
        outline: none;
    }
`;

const MobileMenuFormButton = styled.button`
    margin: 0;
    min-height: 0.8rem;
    padding: 0.6rem 0.7rem;
    color: #fff;
    border-left: 0;
    font-size: 0.75rem;
    font-weight: normal;
    text-transform: none;
    background-color: transparent;
    border-right: 1px solid #333;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
    min-width: 4.8rem;
    -ms-flex-item-align: stretch;
    -ms-grid-row-align: stretch;
    align-self: stretch;
    border-radius: 0 0.3rem 0.3rem 0;
    &:focus, &:hover, &:active {
        color: #336699;
        background-color: transparent;
    };

`;

const MobileMenuFormIcon = styled(SearchOutlined)`
    font-size: 0.75rem;
    font-weight: 500;
    color: #fff;
    margin: 0;
    display: inline-block;
    vertical-align: middle;
`;

const MobileMenuContainer = styled.div`
    
`;
 
const MobileMenuItem = styled(MenuItem)`
`;


const MobileMenuList = styled(MenuList)`
    font-size: 0.79rem;
    display: block;
    position: relative;
    padding: 1.3rem 0.6rem 1.3rem 1rem;
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
    line-height: 1.5;
    color: #eeeeee;
    text-transform: capitalize;
    font-weight: 400;
    :last-child {
        border-bottom: 1px solid #2E3237;
    }
`;

const MobileMenuItemLine = styled.hr`
    border-bottom: 1px solid #2E3237;
`;

// Logo Styles
const Logo = styled.div`
    min-width: 14.4rem;
    margin-right: 2rem;
    ${xs({margin: '0 auto'})};;
    ${lg({marginLeft: '2rem'})};
    ${lg_min({marginLeft: '0rem !important'})};
`;

const LogoImg = styled.img`
    display: block;
    ${sm({marginLeft: '2rem'})}
`;

// Search Form Styles
const Form = styled.form`
    position: relative;
    width: 100%;
    // max-width: 38rem;
    max-width: 48rem;
    ${md({display: 'none'})};
    ${md_min({display: 'flex !important'})};
    ${min_992_and_max_1100({marginLeft: '-50px', marginRight: '40px'})};
    ${min_769_and_max_991({maxWidth: '28rem', marginLeft: '-80px', marginRight: '40px'})};
`;

const Selectbox = styled.div`
    position: relative;
    width: 10.6rem;
    border: 2px solid #336699;
    border-right: none;
    color: #666666;
    ${min_769_and_max_991({width: '7.6rem'})};

    &::before {
        right: 1.2rem;
        margin-top: -0.1rem;
        font-weight: 400;
    };
    &::after {
        content: "";
        height: 35px;
        width: 1px;
        background: #e5e5e5;
        position: absolute;
        right: 0;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
    };
`;

const Select = styled.select`
    padding: 0 2rem 0 1.5rem;
    border: 0;
    font-weight: 400;

    position: relative;
    max-width: 14.6rem;
    min-height: auto;
    width: 100%;
    height: 100%;
    padding-left: 9px;
    padding-right: 27px;
    border: 1px solid #e3e3e3;
    color: inherit;
    background-color: transparent;
    font-size: 0.80rem;
    font-family: inherit;
    letter-spacing: inherit;
    z-index: 1;
    -moz-appearance: none;
    -webkit-appearance: none;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;

const Option = styled.option`
    font-size: 1rem;
`;

const Input = styled.input`
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    min-width: 40px;
    padding: 0.9rem;
    border: 2px solid #336699;
    font-size: 0.85rem;
    letter-spacing: 0;
    color: #666;
    border-right: none;
    border-left: none;
    

    &::-webkit-input-placeholder, 
    &::-moz-placeholder, 
    &:-ms-input-placeholder,
    &::-ms-input-placeholder,
    &::placeholder {
        color: inherit
    };

    &:focus {
        outline: none;
    }
`;

const Button = styled.button`
    margin: 0;
    padding: 0;
    min-width: 5.1rem;
    color: #333;
    border-left: 0;
    border-color: #336699;
    font-size: 1.5rem;
    font-weight: normal;
    letter-spacing: -0.025em;
    text-transform: none;
    background-color: transparent;
    border-right: 2px solid #336699;
    border-top: 2px solid #336699;
    border-bottom: 2px solid #336699;

    &:focus, &:hover, &:active {
        color: #336699;
        background-color: transparent;
    };

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-transition: opacity 0.4s, color 0.4s;
    transition: opacity 0.4s, color 0.4s;
`;

const Icon = styled(SearchOutlined)`
    font-size: 1.7rem;
    line-height: 1;
    letter-spacing: -0.01em;
    font-weight: 500;

    color: #333;
    margin: 0;
    display: inline-block;
    vertical-align: middle;
`;

// Add to Cart Section Styles
const HeaderRight = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-left: auto;
`;

const WishList = styled(Link)`
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
    margin-right: 2.3rem;
    color: #333;
    text-decoration: none;
    transition: color 0.3s;
    list-style-type: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    ${lg({display: 'none!important'})};
`;

const WishListIcon = styled(FavoriteBorderOutlinedIcon)`
    font-size: 2.7rem;
    color: inherit;
    display: inline-block;
`;

const CompareIcons = styled(CompareOutlinedIcon)`
    font-size: 2.7rem;
    color: inherit;
    display: inline-block;
`;

const WishListSpan = styled.span`
    margin-top: 0.3rem;
    font-weight: inherit;
    color: inherit;
    cursor: pointer;
    display: block;
`;

// Add to Cart Styles
const CartDiv = styled.div`
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
    margin-right: 2.3rem;
    color: #333;

    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
`;

const CartButton = styled(ShoppingCartOutlinedIcon)`
    font-size: 2.7rem;
    color: inherit;
    display: inline-block;
    top: 12.9%;
    ${xs({top: '13.9%'})};
    right: 2rem;
`;

const CartSpan = styled.span`
    margin-top: 0.3rem;
    font-weight: inherit;
    color: inherit;
    cursor: pointer;
    display: block;
    ${xs({display: 'none'})};
`;

const CartDropdownBox = styled.div`
    padding: 2rem 1rem;
    font-size: inherit;
    line-height: 1.1;
    color: #666;
    background-color: #fff;
    position: fixed;
    top: 0;
    right: 0;
    -webkit-transition: -webkit-transform 0.2s ease-out;
    transition: -webkit-transform 0.2s ease-out;
    transition: transform 0.2s ease-out;
    transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
    max-width: 246px;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    z-index: 2499;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
    -webkit-box-shadow: 0 4px 20px -8px rgba(0, 0, 0, 0.3);
    box-shadow: 0 4px 20px -8px rgba(0, 0, 0, 0.3);

`;

const CartHeader = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    text-transform: uppercase;
    margin-bottom: 1.4rem;
    border-bottom: 1px solid #eee;
    span {
        font-size: 1rem;
        font-weight: bold;
        color: #333;
        margin-bottom: 0.5rem;
    }
    .btnClose {
        padding: 0;
        font-size: 1rem;
        font-weight: 400;
        color: #333;
        text-transform: capitalize;
        text-decoration: none;
        transition: color 0.3s;
        list-style-type: none;
        margin-bottom: 0.5rem;
    }
`;

const ArrowRightAltIcon = styled(ArrowRightAlt)`
    margin-left: 0.6rem;
    font-size: 1rem;
    margin-bottom: 0;
`;

const Products = styled.div`
    max-height: 30rem;
    overflow-y: scroll;
    border-bottom: 1px solid #eee;
    padding-bottom: 2.1rem;
`;

const Product = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    position: relative;
    padding: 2rem 0 0;
`;

const ProductDetail = styled.div`
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
`;

const ProductName = styled(Link)`
    color: #333;
    white-space: normal;
    padding: 0;
    font-size: 1.1rem;
    line-height: 1.4;
    margin-bottom: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: none;
    transition: color 0.3s;
    list-style-type: none;
    cursor: pointer;
`;

const PriceBox = styled(Link)`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-decoration: none;
    list-style-type: none;
    margin-top: 1.3rem;

    span.quantity {
        margin-right: 0.7rem;
        font-size: 1.1rem;
        font-weight: 400;
        color: #999;

        &::after {
            content: "x";
            font-size: 1.1rem;
            font-weight: 400;
            margin-left: 0.7rem;
            text-transform: none;
            line-height: 0;
        }
    }

    span.price {
        color: #336699;
        overflow: visible;
        display: block;
        text-overflow: ellipsis;
        white-space: nowrap;
        -webkit-box-align: baseline;
        align-items: baseline;
        font-size: 1.2rem;
        font-weight: 600;
        letter-spacing: -0.05em;
        line-height: 1.6;
        transition: visibility 0.4s, opacity 0.4s;
    }
`;

const ProductMedia = styled.figure`
    max-width: 8rem;
    -webkit-box-flex: 0;
    -ms-flex: 0 0 8rem;
    flex: 0 0 8rem;
`;

const ProductMediaLink = styled(Link)`
    display: block;
    padding: 0;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0.9rem;
    right: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    -webkit-box-shadow: 0px 3px 5px 2px rgb(0 0 0 / 20%);
    box-shadow: 0px 3px 5px 2px rgb(0 0 0 / 20%);
    color: #333;
    background-color: #fff;
    padding-bottom: 0;
    padding: 0;
    border: 0;
`;

const CloseIcon = styled(Close)`
    font-size: 0.8rem;
    font-weight: 600;
    margin: 0;
    line-height: 0.4rem;
    display: inline-block;
    vertical-align: middle;
    -webkit-font-smoothing: antialiased;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    text-transform: uppercase;
    text-align: center;
    white-space: nowrap;
    cursor: pointer;

    &:hover {
        color: #336699;
    }
`;

const ViewCartButton = styled.button`
    padding: 10px;
    cursor: pointer;
    font-weight: 600;
    text-transform: uppercase;
    border: none;
    color: #ffffff;
    background-color: #000000;
    margin-right: 20px;

    a {
        color: #ffff;
        text-decoration: none;
    }
`;

const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-sze: 24px;
`;

const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;

const HeaderMiddle = () => {
    const menuNode = useRef();
    const cartNode = useRef();
    const cart = useSelector(state => state.cart);
    const [openMenu, setOpenMenu] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    MenuOnClickOutside(menuNode, () => setOpenMenu(false));
    CartOnClickOutside(cartNode, () => setOpenCart(false));
    const quantity = useSelector(state => state.cart.quantity);

    return (
        <Headermiddle>
            <Container>
                <Headerleft>
                    <div ref={menuNode}>
                        <MobileMenuBurgerButton open={openMenu} onClick={() => setOpenMenu(!openMenu)}>
                            <div/>
                            <div/>
                            <div/>
                        </MobileMenuBurgerButton>
                        <MobileMenuNav open={openMenu}>
                            <MobileMenuForm method="get" action="#">
                                <MobileMenuFormInput type="text" name="search" id="search" placeholder="Search in..." required />
                                <MobileMenuFormButton type="submit"><MobileMenuFormIcon/></MobileMenuFormButton>
                            </MobileMenuForm>
                            <MobileMenuContainer>
                                <MobileMenuItem>
                                    <MobileMenuList to='/'>Home</MobileMenuList>
                                </MobileMenuItem><MobileMenuItemLine/>
                                <MobileMenuItem>
                                    <MobileMenuList to='/products'>Shop</MobileMenuList>
                                </MobileMenuItem><MobileMenuItemLine/>
                                <MobileMenuItem>
                                    <MobileMenuList to='#'>About</MobileMenuList>
                                </MobileMenuItem><MobileMenuItemLine/>
                                <MobileMenuItem>
                                    <MobileMenuList to='#'>Contact</MobileMenuList>
                                </MobileMenuItem><MobileMenuItemLine/>
                                <MobileMenuItem>
                                    <MobileMenuList to='#'>Blog</MobileMenuList>
                                </MobileMenuItem><MobileMenuItemLine/>
                                <MobileMenuItem>
                                    <MobileMenuList to='#'>Sign In</MobileMenuList>
                                </MobileMenuItem><MobileMenuItemLine/>
                                <MobileMenuItem>
                                    <MobileMenuList to='#'>Register</MobileMenuList>
                                </MobileMenuItem>
                            </MobileMenuContainer>
                        </MobileMenuNav>
                    </div>
                    <Linked to='/'>
                        <Logo>
                            <LogoImg src='/img/logo2.png' width="144" height="45"/>
                        </Logo>
                    </Linked>
                    <Form method="get" action="#">
                        <Selectbox>
                            <Select>
                                <Option value="">All Categories</Option>
                                <Option value="4">Fashion</Option>
                                <Option value="5">Furniture</Option>
                                <Option value="6">Shoes</Option>
                                <Option value="7">Sports</Option>
                                <Option value="8">Games</Option>
                                <Option value="9">Computers</Option>
                                <Option value="10">Electronics</Option>
                                <Option value="11">Kitchen</Option>
                                <Option value="12">Clothing</Option>
                            </Select>
                        </Selectbox>
                        <Input type="text" name="search" id="search" placeholder="Search in..." required />
                        <Button type="submit"><Icon/></Button>
                    </Form>
                </Headerleft>
                <HeaderRight>
                    <WishList>
                        <WishListIcon/>
                        <WishListSpan>Wishlist</WishListSpan>
                    </WishList>
                    <WishList>
                        <CompareIcons/>
                        <WishListSpan>Compare</WishListSpan>
                    </WishList>
                    <div ref={cartNode}>
                        <CartDiv>
                            <Badge badgeContent={quantity} color="primary">
                                <CartButton open={openCart} onClick={() => setOpenCart(!openCart)}/>
                            </Badge>
                            <CartSpan>Cart</CartSpan>
                        </CartDiv>
                        <CartDropdownBox open={openCart}>
                            <CartHeader>
                                <span>Shopping Cart</span>
                                <Link to="#" className="btnClose">Close<ArrowRightAltIcon/></Link>
                            </CartHeader>
                            <Products>
                                {cart.products.map((product) => (
                                    <Product key={product._id}>
                                        <ProductDetail>
                                            <ProductName to={`/product/${product._id}`}>{product.title}</ProductName>
                                            <PriceBox>
                                                <span className='quantity'>{product.quantity}</span>
                                                <span className='price'>${product.price*product.quantity}</span>
                                            </PriceBox>
                                        </ProductDetail>
                                        <ProductMedia>
                                            <ProductMediaLink to='#'>
                                                <img src={product.img} alt="product" height="84" width="94" />
                                            </ProductMediaLink>
                                        </ProductMedia>
                                        <CloseButton>
                                            <CloseIcon/>
                                        </CloseButton>
                                    </Product>
                                ))}
                            </Products>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice>${cart.total}</SummaryItemPrice>
                            </SummaryItem>
                            <ViewCartButton><Link to='/cart/'>View Cart</Link></ViewCartButton>
                            <ViewCartButton><Link to='#'>Checkout</Link></ViewCartButton>
                        </CartDropdownBox>
                    </div>
                </HeaderRight>
            </Container>
        </Headermiddle>
    )
};

export default HeaderMiddle;