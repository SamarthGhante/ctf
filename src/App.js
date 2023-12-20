import { useState } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import GetKey from "./pages/getKey/GetKey.js";
import l458iow from "./linker/l458iow.js";

function App() {

    const router = createBrowserRouter([
        { path: l458iow.hh188, element: <Home /> },
        { path: l458iow.getKey, element: <GetKey/> },

    ])
    return (<>

        <RouterProvider router={router} />

    </>)
};

export default App;