import { SIGN_IN, SIGN_OUT, CREATE_STREAM, FETCH_STREAMS, FETCH_STREAM, EDIT_STREAM, DELETE_STREAM } from "./types";
import api from '../api/index';
import history from '../history';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT
  }
}

export const createStream = (formValues) => async (dispatch, getState) => {
  try {
    
    const {userId} = getState().auth;
    const res = await api.post('/streams', {...formValues, userId});
    dispatch({type: CREATE_STREAM, payload: res.data})
    history.push('/');
  } catch (error) {
    console.log(error)
  }
}

export const fetchStreams = () => async dispatch => {
  try {
    const res = await api.get('/streams')
    dispatch({type: FETCH_STREAMS, payload: res.data})
  } catch (error) {
    console.log(error)
  }
}

export const fetchStream = (id) => async dispatch => {
  try {
    const res = await api.get('/streams/' + id);
    dispatch({type: FETCH_STREAM, payload: res.data})
  } catch (error) {
    console.log(error)
  }
}

export const editStream = (id, updatedValue) => async dispatch => {
  try {
    const res = await api.patch(`/streams/${id}`, updatedValue)
    dispatch({type: EDIT_STREAM, payload: res.data})
    history.push('/');
  } catch (error) {
    console.log(error)
  }
}

export const deleteStream = (id) => async dispatch => {
  try {
    await api.delete(`/streams/${id}`);
    dispatch({type: DELETE_STREAM, payload: id})
    history.push('/')
  } catch (error) {
    console.log(error)
  }
}