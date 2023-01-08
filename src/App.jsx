import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import "./App.css";
import About from "./component/router/About";
import Blog from "./component/router/Blog";
import BlogDetail from "./component/router/BlogDetail";
import Home from "./component/router/Home";
import NotFound from "./component/router/NotFound";

function App() {
    const [login, setLogin] = useState(false);

    return (
        <>
            <BrowserRouter>
                <nav>
                    <ul className="flex justify-center gap-8">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "font-bold text-xl hover:text-pink-600 underline"
                                        : "font-bold text-xl hover:text-pink-600"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive
                                        ? "font-bold text-xl hover:text-pink-600 underline"
                                        : "font-bold text-xl hover:text-pink-600"
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                className={({ isActive }) =>
                                    isActive
                                        ? "font-bold text-xl hover:text-pink-600 underline"
                                        : "font-bold text-xl hover:text-pink-600"
                                }
                            >
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about/*" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<BlogDetail />} />
                    <Route
                        path="/view"
                        element={login ? <Navigate to="/blog" /> : <h3 className="text-center">Please Login !</h3>}
                    />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
