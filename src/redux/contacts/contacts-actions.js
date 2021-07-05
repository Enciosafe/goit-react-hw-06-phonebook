import types from './contacts-types'


const addContact = (data) => ({
    type: types.ADD,
    payload: ({
        name: data.name,
        number: data.number,
        id: data.id,
        sex: data.sex,
    })
})

const delContact = (id) => ({
    type: types.DEL,
    payload: id
})

const changeFilter = (value) => ({
    type: types.FILTER,
    payload: value,
})


export default {addContact, delContact, changeFilter}