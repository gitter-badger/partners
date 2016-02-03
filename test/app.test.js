import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import App from '../src/App';


describe('App Component', () => {

    it ('should render h1 Hello World',  () => {
        const vdom = shallow(<App />);
        expect(vdom.type()).toBe('h1');
        expect(vdom.text()).toBe('Hello, world.');
    })

})
