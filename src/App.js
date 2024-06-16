import About from './About/About';
import Home from './Home/Home';
import NavBar from './Navbar/Navbar';
import Contact from './Contact/Contact';
import Skills from './Skills/skills';
import Projects from './Projects/Projects';
import Education from './Education/Education';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>

    </div>
  );
}

export default App;

