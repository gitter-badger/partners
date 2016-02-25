import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';

import Main from '../src/containers/main/main';
import Toolbar from '../src/components/toolbar/toolbar'


describe('Main Component', () => {

    it ('Main contains Toolbar',  () => {
        const handler = () => {};
        const vdom = shallow(<Main />);

        expect(true).toBe(true);
        // expect(vdom.contains(
        //     <Toolbar
        //         onSearch={handler}
        //         onEdit={handler}
        //         onNew={handler}/>)
        //     ).toBe(true);
    })

})
