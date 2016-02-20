import React from 'react';
import style from './style.css'

const Contact = (props) => {
    const { title, image } = props;

    return (
        <div className={style.contact}>
            <span>{title}</span>
            <image src={image} />
        </div>
    )
}

Contact.propTypes = {
    title: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired
}

export default Contact;
