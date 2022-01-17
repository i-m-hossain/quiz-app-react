import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./../styles/App.css";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";

function App() {
    return (
        <Layout>
            <Home></Home>
        </Layout>
    );
}

export default App;
