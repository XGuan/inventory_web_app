import {
  GET_ALL_STORAGE_REQUEST,
  GET_ALL_STORAGE_SUCCESS,
  GET_ALL_STORAGE_FAIL,
} from '../constants/storageConstants'

export const getAllStorageReducer = (state = { storageList: [] }, action) => {
  switch (action.type) {
    case GET_ALL_STORAGE_REQUEST:
      return { loading: true, storageList: [] }
    case GET_ALL_STORAGE_SUCCESS:
      return { loading: false, storageList: action.payload }
    case GET_ALL_STORAGE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
