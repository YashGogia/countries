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

export function CountryCard({ country }) {
  return (
    <div className='countryCard'>
      <img className="flag" alt={country.flags.alt} src={country.flags.svg}></img>
      <div className="details">
        <h2 className="name">{country?.name?.common}</h2>
        <div className="detail">Population: {<span className="val">{country.population} </span>}</div>
        <div className="detail">Region:  {<span className="val">{country.region}</span>}</div>
        <div className="detail">Capital:  {<span className="val">{country.capital[0]}</span>}</div>
      </div>
    </div>
  )
}