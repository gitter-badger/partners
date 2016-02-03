import React from 'react';
import {createRenderer, getRenderOutput} from 'react-addons-test-utils';
import expect from 'expect';
import App from '../src/App';


describe('App Component', () => {

    it ('should render h1 Hello World',  () => {
        const shallowRenderer = createRenderer();
        shallowRenderer.render(<App />);
        const vdom = shallowRenderer.getRenderOutput();

        expect(vdom.type).toBe('h1');
        expect(vdom.props.children).toBe('Hello, world.');
    })

})
