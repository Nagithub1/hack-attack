// import { useState } from "react";
import { Routes,Route } from "react-router-dom";
import Hero from "./components/hero";
import Login from "./components/login";
import Dashboard from "./components/dashboard";

const App =()=>
{
    return (
        <Routes>
            <Route path="/" element={<Hero/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}
export default App;