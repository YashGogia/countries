import { useEffect, useState } from 'react'
import "./CountriesList.css"
import { CountryCard } from './CountryCard'


export function CountriesList() {

  const [countriesData, setCountriesData] = useState([])
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital")
      .then((data) => data.json())
      .then((result) => setCountriesData(result))
  }, [])

  return (
    <section className="countriesList">
      {
        countriesData.map((country) => <CountryCard key={country.name.common} country={country} />)
      }
    </section>
  )
}