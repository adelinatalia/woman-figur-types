import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import IdentifyShape from "./pages/IdentifyShape";
import NotFound from "./pages/NotFound";

export default function RoutesNav() {
    return (
        <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/identifyShape' element={<IdentifyShape />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}
