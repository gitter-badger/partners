import React from 'react';
import Contact from '../../components/contact/contact';
import style from './style.css';

const Contacts = (props) => {
    const handleClick = (item) => {
        console.log('Clicked', item);
    }

    const contacts = props.contacts.map((contact, i) => {
        return (
            <Contact title={contact.name.first}
                     image={contact.picture.thumbnail}
                     key={i}
                     onSelect={handleClick} />
        )
    })

    return (
        <div className={style.contacts}>
            {contacts}
        </div>
    )
}

Contacts.propTypes = {
    contacts: React.PropTypes.array.isRequired
}

export default Contacts;
