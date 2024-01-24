import { useEffect, useState } from 'react'
import "./CountriesList.css"
import { CountryCard } from './CountryCard'
import { SkeletonCard } from './skeletons/SkeletonCard'
import { BASE_API_URL } from '../Utils/Constants'
const API_URL = `${BASE_API_URL}/all?fields=name,flags,population,region,capital`

export function CountriesList() {

  const [countriesData, setCountriesData] = useState([])
  useEffect(() => {
    setTimeout(() => {
      fetch(API_URL)
        .then((data) => data.json())
        .then((result) => setCountriesData(result))
    }, 1000)
  }, [])


  return (
    <section className="countriesList">
      {
        countriesData.length ?
          countriesData.map((country) => <CountryCard key={country.name.common} country={country} />)
          :
          Array.from({ length: 12 }).map((_, idx) => <SkeletonCard key={idx} />)
      }
    </section>
  )
}