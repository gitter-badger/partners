import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import App from '../src/App';
import Main from '../src/containers/main/main';


describe('App Component', () => {

    it ('should render h1 Hello World',  () => {
        const vdom = shallow(<App />);
        expect(vdom.contains(<Main />)).toBe(true);
    })

})
