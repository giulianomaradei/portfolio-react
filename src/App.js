import './App.css';
import Header from './Components/Header';
import About from './Components/Sections/About';
import Contact from './Components/Sections/Contact';
import Projects from './Components/Sections/Projects';
import Tech from './Components/Sections/Tech';
import Welcome from './Components/Sections/Welcome';


function App() {
  return (
    <div className='app'>
      <Header></Header>
      <Welcome></Welcome>
      <About></About>
      <Tech></Tech>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
}

export default App;
