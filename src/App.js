import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Admissions from "../src/pages/Admissions";
import Contact from "../src/pages/Contact";
import Academics from "../src/pages/Academics";
import More from "../src/pages/More";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
