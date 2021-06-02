import axios from 'axios';

import {ADD_POST, GET_ERRORS, GET_POSTS,GET_POST, POST_LOADING, DELETE_POST, GET_POST_USER} from './types'


export const addPost = postData => dispatch => {
    axios
        .post('/api/posts', postData)
        .then(res => dispatch({
            type: ADD_POST,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}

export const getPosts = () => dispatch => {
    dispatch(setPostLoading());
    axios
        .get('/api/posts')
        .then(res => dispatch({
            type: GET_POSTS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_POSTS,
            payload: null
        }))
}

export const getPostsByUser = id => dispatch => {
    dispatch(setPostLoading());
    axios
        .get(`/api/posts/user/${id}`)
        .then(res => dispatch({
            type: GET_POST_USER,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_POST_USER,
            payload: null
        }))
}

export const getPost = id => dispatch => {
    dispatch(setPostLoading());
    axios
        .get(`/api/posts/${id}`)
        .then(res => dispatch({
            type: GET_POST,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_POST,
            payload: null
        }))
}

export const deletePost = id => dispatch => {
    axios
        .delete(`/api/posts/${id}`)
        .then(res => dispatch({
            type: DELETE_POST,
            payload: id
        }))
        .catch(err => dispatch({
            type: GET_POSTS,
            payload: null
        }))
}
export const likePost = id => dispatch => {
    axios
        .post(`/api/posts/like/${id}`)
        .then(res => dispatch(getPosts()))
        .catch(err => dispatch({
            type: GET_POSTS,
            payload: null
        }))
}
export const likePostByID = id => dispatch => {
    axios
        .post(`/api/posts/like/${id}`)
        .then(res => dispatch(getPost(id)))
        .catch(err => dispatch({
            type: GET_POST,
            payload: null
        }))
}

export const likePostByUser = (id, uid) => dispatch => {
    axios
        .post(`/api/posts/like/${id}`)
        .then(res => dispatch(getPostsByUser(uid)))
        .catch(err => dispatch({
            type: GET_POST_USER,
            payload: null
        }))
}

export const addComment = (postId, newComment) => dispatch => {
    axios
        .post(`/api/posts/comment/${postId}`, newComment)
        .then(res => dispatch({
            type: GET_POST,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}
export const deleteComment = (postId, commentId) => dispatch => {
    axios
        .delete(`/api/posts/comment/${postId}/${commentId}`)
        .then(res => dispatch({
            type: GET_POST,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        }))
}
export const setPostLoading = () => {
    return {
        type: POST_LOADING
    }
}


