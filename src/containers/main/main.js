import  React, { Component } from 'react';
import Toolbar from '../../components/toolbar/toolbar';
import Contacts from '../../containers/contacts/contacts';

const contacts = [
   {
      'name':{
         'first':'manuela'
      },
      'picture':{
         'thumbnail':'http://api.randomuser.me/portraits/thumb/women/39.jpg'
      }
   },
   {
      'name':{
         'first':'barbara'
      },
      'picture':{
         'thumbnail':'http://api.randomuser.me/portraits/thumb/women/74.jpg'
      }
   }
]

export default class Main extends Component {
    render() {
        return (
            <div>
                <Toolbar onSearch={this.onSearch}
                         onEdit={this.onEdit}
                         onNew={this.onNew} />
                <Contacts contacts={contacts} />
                { this.props.children }
            </div>
        )
    }

    onSearch(text) {
        console.log('search...' + text);
    };

    onEdit() {
        console.log('edit...');
    };

    onNew() {
        console.log('new...');
    };

}
