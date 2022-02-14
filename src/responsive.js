import { css } from 'styled-components';

// XS
export const xl = (props) => {
    return css`
        @media only screen and (max-width: 1199px){
            ${props}
        }
    `
}; 

export const lg = (props) => {
    return css`
        @media only screen and (max-width: 991px){
            ${props}
        }
    `
}; 

export const lg_min = (props) => {
    return css`
        @media only screen and (min-width: 992px){
            ${props}
        }
    `
}; 

export const md = (props) => {
    return css`
        @media only screen and (max-width: 767px){
            ${props}
        }
    `
};

export const md_min = (props) => {
    return css`
        @media only screen and (min-width: 768px){
            ${props}
        }
    `
}; 

export const sm = (props) => {
    return css`
        @media only screen and (max-width: 575px){
            ${props}
        }
    `
}; 

export const xs = (props) => {
    return css`
        @media only screen and (max-width: 479px){
            ${props}
        }
    `
};

export const min_992_and_max_1100 = (props) => {
    return css`
        @media only screen and (min-width: 992px) and (max-width: 1199px){
            ${props}
        }
    `
};

export const min_769_and_max_991 = (props) => {
    return css`
        @media only screen and (min-width: 768px) and (max-width: 992px){
            ${props}
        }
    `
};

// export const mobile = (props) => {
//     return css`
//         @media only screen and (max-width: 380px){
//             ${props}
//         }
//     `
// };

