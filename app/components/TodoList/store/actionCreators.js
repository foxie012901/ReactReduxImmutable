// import {
//     CHANGE_INPUT_VALUE,
//     INIT_LIST,
//     DELETE_LIST_INDEX,
//     GET_DATA,
//     PUT_DATA_TO_LIST,
//     GET_IS_SHOW,
// } from "./actionTypes";

import { actionTypes } from "./";
import { fromJS } from 'immutable'

export const getIsShow = changedata => ({
    type: actionTypes.GET_IS_SHOW,
    changedata
})

export const getChangeInputValue = value => ({
    type: actionTypes.CHANGE_INPUT_VALUE,
    value,
})

export const InitList = () => ({
    type: actionTypes.INIT_LIST,
})

export const delInitListIndex = index => ({
    type: actionTypes.DELETE_LIST_INDEX,
    index
})

export const getData = data => ({
    type: actionTypes.GET_DATA,
    data:fromJS(data)
})

export const putDataToList = () => ({
    type: actionTypes.PUT_DATA_TO_LIST
})