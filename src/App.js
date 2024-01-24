import './App.css';
import { CountriesList } from './Components/CountriesList';
import { Route, Routes } from 'react-router-dom';
import { Country } from './Components/country/Country';
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
      <Routes>
        <Route path='/:countryName' element={<Country />} />
        <Route path="/" element={<CountriesList />} />
      </Routes>
    </div>
  );
}

export default App;