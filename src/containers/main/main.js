import  React from 'react';
import { connect } from 'react-redux'
import { hashHistory } from 'react-router';

import { Toolbar } from '../../components';
import Contacts from '../../containers/contacts/contacts';

import contacts from '../../stores/mockContacts.js';

import style from './style.css';

const Main = ({ contacts, active, onSearch, onEdit, onCreate, onSelect }) => {
  return (
    <div>
      <div className={style.toolbar}>
        <Toolbar onSearch={onSearch}
                 onEdit={onEdit}
                 onCreate={onCreate}>
        </Toolbar>
      </div>

      <div className={style.mainPanel}>
        <div className="{style.navPanel}">
          <Contacts contacts={contacts}
                    onSelect={onSelect} />
        </div>

        <div className={style.contentPanel}>
          { /*this.props.children*/ }
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: contacts,
    active: contacts[0].id
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSelect: () => {
      console.log("select...")
    },
    onEdit: () => {
      console.log("Edit...")
    },
    onSearch: () => {
      console.log("Search...")
    },
    onCreate: () => {
      console.log("Create...")
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
