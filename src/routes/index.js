import React from 'react';
import { Route } from 'react-router';

import Main from '../containers/main/main';
import ContactProfile from '../components/contactProfile/contactProfile';

export default (
    <Route path='/' component={Main}>
        <Route path='contacts/:id' component={ContactProfile} />
    </Route>
)
