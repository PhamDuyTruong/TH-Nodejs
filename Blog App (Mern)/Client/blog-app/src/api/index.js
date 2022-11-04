import axios from 'axios';

const URL = 'http://localhost:5000';

export const fetchPosts = () => axios.get(`${URL}/posts`);
export const createPost = (payload) => axios.post(`${URL}/posts`, payload, {headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
}});
export const updatePost = (payload) => axios.post(`${URL}/posts/update`, payload, {headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
}})