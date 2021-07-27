import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';


function App() {
  return (
    <div className="page">
      <div className="page__container">
      <Header />
      <About />
      <Projects />
      </div>
    </div>
  );
}

export default App;
