//import logo from './logo.svg';
import './App.css';
import { Navbar } from './components';
import { Header, About, Proj } from './containers';


function App() {
  return (
    <div className="App">
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <About />
      <Proj />
    </div>
  );
}

export default App;
