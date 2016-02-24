import React from 'react';
import style from './style.css'

const Contact = (props) => {
    const { title, image, onSelect } = props;

    return (
        <div className={style.contact} onClick={onSelect}>
            <span>{title}</span>
            <image src={image} />
        </div>
    )
}

Contact.propTypes = {
    title: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired,
    onSelect: React.PropTypes.func.isRequired
}

export default Contact;
