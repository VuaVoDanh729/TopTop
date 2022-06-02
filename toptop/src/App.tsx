import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/components/routes/Route';
import DefaultLayout from './components/layout/Layout';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return <Route key={index} path={route.path} element={<Page />} />;
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
