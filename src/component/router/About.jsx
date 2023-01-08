import React from "react";
import { Routes, Route } from "react-router-dom";
import Info from "./Info";
function About() {
    return (
        <>
            <h3 className="text-center">This is About page</h3>
            <Routes>
                <Route path="info" element={<Info />} />
            </Routes>
        </>
    );
}

export default About;
