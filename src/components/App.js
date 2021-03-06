import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';


function App() {
  return (
    <div className="page">
      <div className="page__container">
      <Header />
      <About />
      <Projects />
      <Footer />
      </div>
    </div>
  );
}

export default App;
