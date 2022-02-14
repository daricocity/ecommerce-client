import axios from 'axios';
import { useEffect } from 'react';

const BASE_URL = 'https://ecomma-api.herokuapp.com/api/';

const TOKEN = () => {
    if(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken){
        return JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken
    } else {
        return ''
    }
}

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`}
})

export const MenuOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (e) => {
            if(!ref.current || ref.current.contains(e.target)){
                return;
            }
            handler(e);
        };
        document.addEventListener('mousedown', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler])
}

export const CartOnClickOutside = (ref, handler) => {
    useEffect(() => {
        const listener = (e) => {
            if(!ref.current || ref.current.contains(e.target)){
                return;
            }
            handler(e);
        };
        document.addEventListener('mousedown', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
        };
    }, [ref, handler])
}