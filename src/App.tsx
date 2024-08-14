// src/App.tsx
import React from "react";
import NavigationBar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <header>
        <NavigationBar />
      </header>
      <main>
        <Hero />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
