import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { Home } from "../page/Home";
import { Press } from "../page/Press";
import { Biography } from "../page/Biography";
import { Blog } from "../page/Blog";

export const MainRouter = () => {
    return <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/press" element={<Press />} />
        <Route path="/contributions" element={<Biography />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
    </>
}