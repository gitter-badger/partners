import contacts from './mockContacts.js';

const contactsService = {

    loadContact: function(id) {
        return Promise.resolve(contacts.find((contact) => contact.id === id));
    },

    loadContacts: function() {
        return Promise.resolve(contacts);
    }
}

export default contactsService;
