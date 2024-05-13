import axios from 'axios';
import { toast } from 'react-toastify';
import ApiCaller from '../apiCaller/ApiCaller';
const userInfo = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

export const register = async (body, setIsRegistered) => {
    try {
        const { data } = await axios.post(`${ApiCaller.site}/users/register`, body);
        console.log(data);
        if (!data.error) {
            toast.success("OTP sent on your email");
            setIsRegistered(true);
        } else {
            toast.error(data.message);
        }
    } catch (err) {
        console.log(err);
    }
}

export const verifyOtp = async (body, navigate) => {
    try {
        const { data } = await axios.post(`${ApiCaller.site}/users/otp`, body);
        console.log(data);
        if (!data.error) {
            toast.success(data.message);
            localStorage.setItem('userInfo', JSON.stringify(data.data));
            // navigate('/');
            window.location.href = '/';
        } else {
            toast.error(data.message);
        }
    } catch (err) {
        console.log(err);
    }
}


export const login = async (body, navigate) => {
    try {
        const { data } = await axios.post(`${ApiCaller.site}/users/login`, body);
        console.log(data);
        if (!data.error) {
            console.log(data);
            toast.success(data.message);
            console.log(data.data);
            localStorage.setItem('userInfo', JSON.stringify(data.data));
            // navigate('/');
            window.location.href = '/';
        } else {
            console.log(data);
            toast.error(data.message);
        }
    } catch (err) {
        console.log(err);
    }
}

export const forgetPassword = async (body, navigate) => {
    try {
        const { data } = await axios.post(`${ApiCaller.site}/users/forgetpassword`, body);
        if (!data.error) {
            toast.success("OTP sent on your email");
            navigate(`/otp/${body.email}`);
        } else {
            toast.error(data.message);
        }
    } catch (err) {
        console.log(err);
    }
}



export const changeProfile = async (profile, navigate) => {
    try {
        const headers = {
            'Content-Type': 'multipart/form-data',
            _id: userInfo._id,
            accesstoken: userInfo.accesstoken
        };

        const { data } = await axios.post(`${ApiCaller.site}/users/uploadprofile`, profile, { headers });
        console.log(data);
        if (!data.error) {
            toast.success(data.message);
            localStorage.setItem('userInfo', JSON.stringify(data.data));
            console.log(data.data);
            navigate('/');
        } else {
            toast.error(data.message);
        }
    } catch (err) {
        console.log(err);
    }
}


export const changePassword = async (body, navigate) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
            _id: userInfo._id,
            accesstoken: userInfo.accesstoken
        };

        const { data } = await axios.post(`${ApiCaller.site}/users/changepassword`, body, { headers });
        if (!data.error) {
            toast.success(data.message);
            localStorage.setItem('userInfo', JSON.stringify(data.data));
            navigate('/');
        } else {
            toast.error(data.message);
        }
    } catch (err) {
        console.log(err);
    }
}
