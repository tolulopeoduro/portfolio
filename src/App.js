import logo from './logo.svg';
import './App.css';
import Nav from './Nav/Nav';
import Intro from './Intro/Intro';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Intro/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
