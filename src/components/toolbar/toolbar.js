import React from 'react';
import style from './style.css';

const Toolbar = function Toolbar(props) {
    const { onSearch, onEdit, onNew } = props;

    return (
        <div className={style.toolbar}>
            <div class="">
                <button type="button" onClick={onSearch}>Search</button>
                <button type="button" onClick={onEdit}>Edit</button>
                <button type="button" onClick={onNew}>New</button>
            </div>
        </div>
    )
}

Toolbar.propTypes = {
    onSearch: React.PropTypes.func.isRequired,
    onEdit: React.PropTypes.func.isRequired,
    onNew: React.PropTypes.func.isRequired
}

export default Toolbar;
