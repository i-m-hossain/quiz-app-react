import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "../Contexts/AuthContext";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";
import "./../styles/App.css";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Quiz from "./pages/Quiz/Quiz";
import Result from "./pages/Result/Result";
import SignUp from "./pages/SignUp/SignUp";

function App() {
    return (
        <Router>
            <AuthProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/register"
                            element={
                                <PublicRoute>
                                    <SignUp />
                                </PublicRoute>
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                <PublicRoute>
                                    <Login />
                                </PublicRoute>
                            }
                        />
                        <Route
                            path="/quiz/:id"
                            element={
                                <PrivateRoute>
                                    <Quiz />
                                </PrivateRoute>
                            }
                        />
                        <Route path="/result/:id" element={<Result />} />
                    </Routes>
                </Layout>
            </AuthProvider>
        </Router>
    );
}

export default App;
