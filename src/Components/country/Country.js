/**
 * Data reference
 *    {
      "flags":{
         "png":"https://flagcdn.com/w320/ad.png",
         "svg":"https://flagcdn.com/ad.svg",
         "alt":"The flag of Andorra features three equal vertical bands of blue, yellow and red, with the coat of arms of Andorra centered in the yellow band."
      },
      "name":{
         "common":"Andorra",
         "official":"Principality of Andorra",
         "nativeName":{
            "cat":{
               "official":"Principat d'Andorra",
               "common":"Andorra"
            }
         }
      },
      "capital":[
         "Andorra la Vella"
      ],
      "region":"Europe",
      "population":77265
   },
 */

import React, { useEffect, useState } from 'react'

import { useParams, Link, useLocation } from 'react-router-dom'

import './Country.css'
import { BASE_API_URL } from '../../Utils/Constants'

export const Country = () => {
   const { countryName } = useParams()
   const { state: country } = useLocation()

   const [countryDetails, setCountryDetails] = useState({})
   // let capital, region, subregion, population, currencies, languages, tld, nativeName;
   useEffect(() => {
      fetch(`${BASE_API_URL}/name/${countryName}?fullText=true`)
         .then((data) => data.json())
         .then((res) => {
            setCountryDetails(res[0])
         })
   }, [countryName])

   let { capital, region, subregion, population, currencies = [], languages = [], tld } = countryDetails;
   population = population?.toLocaleString()
   let nativeName = countryDetails?.name?.nativeName[Object.keys(countryDetails?.name?.nativeName)[0]]?.common;

   return (
      <div className='country-container'>
         <Link className='back' to='/'>{`<- Back`}</Link>
         <section className='country-main'>
            <div className='img-container'>
               <img className="country-flag" src={country?.flags?.svg ?? countryDetails?.flags?.svg} alt={country?.flags.alt}></img>
            </div>
            <div className='country-details'>
               <h1 className='country-heading'>{countryName}</h1>
               <div className="other-details">
                  <div className="country-detail" key={"NativeName"}>
                     <span className="country-title">Native Name: </span>
                     {nativeName ?? ''}
                  </div>
                  <div className="country-detail" key={"Population"}>
                     <span className="country-title">Population: </span>
                     {population}
                  </div>
                  <div className="country-detail" key={"Region"}>
                     <span className="country-title">Region: </span>
                     {region}
                  </div>
                  <div className="country-detail" key={"SubRegion"}>
                     <span className="country-title">Sub Region: </span>
                     {subregion}
                  </div>
                  <div className="country-detail" key={"Capital"}>
                     <span className="country-title">Capital: </span>
                     {capital}
                  </div>
                  <div className="country-detail" key={"TopLevelDomain"}>
                     <span className="country-title">Top Level Domain: </span>
                     {tld}
                  </div>
                  <div className="country-detail" key={"Currencies"}>
                     <span className="country-title">Currencies: </span>
                     {Object.entries(currencies).map(([key, val]) => {
                        return val.name
                     }).join(", ")}
                  </div>
                  <div className="country-detail" key={"Languages"}>
                     <span className="country-title">Languages: </span>
                     {Object.entries(languages).map(([key, val]) => {
                        return val
                     }).join(", ")}
                  </div>
               </div>
            </div>
         </section>
      </div>
   )
}
