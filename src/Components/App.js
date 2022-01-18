import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "../Contexts/AuthContext";
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
                        <Route path="/register" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/quiz" element={<Quiz />} />
                        <Route path="/result" element={<Result />} />
                    </Routes>
                </Layout>
            </AuthProvider>
        </Router>
    );
}

export default App;
