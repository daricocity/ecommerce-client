import { publicRequest } from './utils';
import { loginStart, loginSuccess, loginFailure } from './redux/userRedux';

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};

export const logout = () => {
    localStorage.removeItem('persist:root')
    window.location.href = "/login"
}