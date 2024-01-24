import { Link } from "react-router-dom"

export function CountryCard({ country }) {
  return (
    <Link className='countryCard' to={`/${country.name.common}`} state={country}>
      <img className="flag" alt={country.flags.alt} src={country.flags.svg}></img>
      <div className="details">
        <h2 className="name">{country?.name?.common}</h2>
        <div className="detail">Population: {<span className="val">{country.population} </span>}</div>
        <div className="detail">Region:  {<span className="val">{country.region}</span>}</div>
        <div className="detail">Capital:  {<span className="val">{country.capital[0]}</span>}</div>
      </div>
    </Link >
  )
}