import './App.css';
import Header from './Components/Header';
import About from './Components/Sections/About';
import Tech from './Components/Sections/Tech';
import Welcome from './Components/Sections/Welcome';

function App() {
  return (
    <div>
      <Header></Header>
      <Welcome></Welcome>
      <About></About>
      <Tech></Tech>
    </div>
  );
}

export default App;
