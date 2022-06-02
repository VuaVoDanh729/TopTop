import React from 'react';
import Home from '~/components/pages/Home/Home';
import Following from '~/components/pages/Following/Following';
import Profile from '../pages/Profile/Profile';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
];
export const privateRoutes = [];
