import React from 'react';
import style from './style.css'
import contactsService from '../../services/contactsService';

class ContactProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = { contact: { name: 'no contact' } };
    }

    componentDidMount() {
        contactsService.loadContact(parseInt(this.props.params.id))
            .then((contact) => {
                this.setState({ contact: contact });
            }).bind(this);
    }

    render() {
        return (
            <div className={style.contact}>
                <div> { this.state.contact.name.first } </div>
            </div>
        )
    }
}

export default ContactProfile;
