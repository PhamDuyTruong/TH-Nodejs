import axios from 'axios';
import { loginFailure, loginStart, loginSuccess, registerFailure, registerStart, registerSuccess } from './authSlice';
import { deleteUserFailure, deleteUserStart, deleteUserSuccess, getUsersFailure, getUsersStart, getUsersSuccess } from './userSlice';

export const loginUser = async(user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("/v1/auth/login", user);
        dispatch(loginSuccess(res.data));
        navigate("/");
    } catch (error) {
        dispatch(loginFailure());
    }   
};

export const registerUser = async(user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        await axios.post("/v1/auth/register", user);
        dispatch(registerSuccess());
        navigate("/login");
    } catch (error) {
        dispatch(registerFailure())
    }
};

export const getAllUsers = async(accessToken, dispatch, axiosJwt) => {
    dispatch(getUsersStart());
    try {
        const res = await axiosJwt.get("/v1/user", {
            headers: {token: `Bearer ${accessToken}`}
        });
        dispatch(getUsersSuccess(res.data));
    } catch (error) {
        dispatch(getUsersFailure());
    }
};


export const deleteUser = async(accessToken, dispatch, id, axiosJwt) => {
    dispatch(deleteUserStart());
    try {
        const res = await axiosJwt.delete("/v1/user/"+id, {
            headers: {token: `Bearer ${accessToken}`}
        });
        dispatch(deleteUserSuccess(res.data));
    } catch (error) {
        dispatch(deleteUserFailure(error.response.data));
    }
}