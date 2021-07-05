import {combineReducers} from "redux";
import types from './contacts-types'

const KEY = 'contacts'
const data = window.localStorage.getItem(KEY) || '[]';
const initialItems = JSON.parse(data)


const contacts = (state = initialItems, {type, payload}) => {
    switch (type) {
        case types.ADD:
            return [...state, payload]
        case types.DEL:
            return state.filter(contact => contact.id !== payload)
        default:
            return state

    }
}

const filter = (state = '', {type, payload}) => {
    switch (type) {
        case types.FILTER:
            return payload
        default:
            return state

    }
}


export default combineReducers({
    contacts,
    filter,
})
