import axios from 'axios'

import { CHANGE_INPUT, ADD_ITEM, REMOVE_ITEM, GET_LIST } from './actionTypes'

export const changeInputAction = (value) => ({
  type: CHANGE_INPUT,
  value
})

export const addItemAction = () => ({
  type: ADD_ITEM
})

export const removeItemAction = (index) => ({
  type: REMOVE_ITEM,
  index
})

export const getListAction = (data) => ({
  type: GET_LIST,
  data
})

export const getTodoList = () => {
  return(dispatch) => {
    axios.get('https://www.fastmock.site/mock/8e909c44ed40d10491b4e3b0eebf164c/api/animation')
      .then((res) => {
        const data = res.data
        const action = getListAction(data)
        dispatch(action)
      })
  }
}