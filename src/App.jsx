import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contacts from './components/Contacts';
import Form from './components/Form';
import Blogs from './components/Blogs';
import Dashboardlayout from './components/Dashboard/Dashboardlayout';
import Content from './components/Dashboard/Content';
import Message from './components/Dashboard/Message';
import Footer from "./components/Footer";

const App = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (message) => {
    setMessages([...messages, message]);
  };

  return (
    <Router>
      
      <Routes>
      
        <Route path="/" element={<Layout />}>

          <Route path="/" index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/Blogs" element={<Blogs />} />
        </Route>
        <Route path="/" element={<Dashboardlayout />}>
          <Route path="Content" index element={<Content />} />
          <Route path="Message" element={<Message messages={messages} />} />
        </Route>

        <Route path="/footer" element={<Footer addMessage={addMessage} />} />
        <Route path="/messages" element={<Message messages={messages} />} />
      </Routes>
    </Router>
  );
};

export default App;

