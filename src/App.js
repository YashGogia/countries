import './App.css';
import { CountriesList } from './Components/CountriesList';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <div className="header-content">
          <h1>
            Where in the world?
          </h1>
        </div>
      </header>
      <CountriesList />
    </div>
  );
}

export default App;