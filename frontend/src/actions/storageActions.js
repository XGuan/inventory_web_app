import axios from 'axios'
import {
  GET_ALL_STORAGE_REQUEST,
  GET_ALL_STORAGE_SUCCESS,
  GET_ALL_STORAGE_FAIL,
} from '../constants/storageConstants'

export const getAllStorage = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_ALL_STORAGE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.get('/api/storage', config)

    dispatch({
      type: GET_ALL_STORAGE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: GET_ALL_STORAGE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
