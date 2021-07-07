import {combineReducers} from "redux";
import { createReducer } from '@reduxjs/toolkit'
import actions from './contacts-actions'


const KEY = 'contacts'
const data = window.localStorage.getItem(KEY) || '[]';
const initialItems = JSON.parse(data)


const contacts = createReducer(initialItems, {
    [actions.addContact]: (state, {payload}) => [...state, payload],
    [actions.delContact]: (state, {payload}) => state.filter(contact => contact.id !== payload),
})


const filter = createReducer('', {
    [actions.changeFilter]: (_, {payload}) => payload,
})

export default combineReducers({
    contacts,
    filter,
})


// const contacts = (state = initialItems, {type, payload}) => {
//     switch (type) {
//         case types.ADD:
//             return [...state, payload]
//         case types.DEL:
//             return state.filter(contact => contact.id !== payload)
//         default:
//             return state
//
//     }
// }
// const filter = (state = '', {type, payload}) => {
//     switch (type) {
//         case types.FILTER:
//             return payload
//         default:
//             return state
//
//     }
// }

