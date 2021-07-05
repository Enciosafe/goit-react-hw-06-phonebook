import React from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import PropTypes from "prop-types";
import {connect} from "react-redux";





class App extends React.Component {

    componentDidUpdate(prevProps, prevState) {
        const KEY = 'contacts'
        if (this.props.contacts !== prevProps.contacts) {
            const data = JSON.stringify(this.props.contacts)
            window.localStorage.setItem(KEY, data)
        }
    }


    render()
    {
        return <>
        <h1>Phonebook</h1>
            <ContactForm contacts={this.props.contacts}/>
            <h2>Contacts</h2>
            <Filter/>
            <ContactList/>
        </>
  }
}

const mapStateToProps = state => ({
    contacts: state.contacts.contacts,
    filter: state.contacts.filter,
})



export default connect(mapStateToProps)(App);


App.propTypes = {
    filter: PropTypes.string,
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string,
            sex: PropTypes.string.isRequired
        })
    )
};


