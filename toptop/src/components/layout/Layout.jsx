import React from 'react';
import Header from './DefaultLayout/Sidebar';
import Sidebar from './DefaultLayout/Sidebar';

export default function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div>
                <Sidebar />
                <div>{children}</div>
            </div>
        </div>
    );
}
