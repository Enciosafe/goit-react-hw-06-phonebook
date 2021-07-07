
import { createAction } from '@reduxjs/toolkit'

const addContact = createAction('contacts/addContact')
const delContact = createAction('contacts/delContact')
const changeFilter = createAction('contacts/filteredContacts');

const contactsActions = {addContact, delContact, changeFilter}

export default contactsActions


// const addContact = (data) => ({
//     type: types.ADD,
//     payload: ({
//         name: data.name,
//         number: data.number,
//         id: data.id,
//         sex: data.sex,
//     })
// })
// const delContact = (id) => ({
//     type: types.DEL,
//     payload: id
// })
// const changeFilter = (value) => ({
//     type: types.FILTER,
//     payload: value,
// })