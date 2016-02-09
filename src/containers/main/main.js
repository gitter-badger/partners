import  React, { Component } from 'react';
import Toolbar from '../../components/toolbar';

export default class Main extends Component {
    render() {
        return <Toolbar onSearch={this.onSearch} onEdit={this.onEdit} onNew={this.onNew} />
    }

    onSearch() {
        console.log('search...');
    };

    onEdit() {
        console.log('edit...');
    };

    onNew() {
        console.log('new...');
    };
}
