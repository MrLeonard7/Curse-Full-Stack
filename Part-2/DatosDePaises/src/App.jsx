import { useEffect, useState } from "react"
import countriesService from "./Services/countries"

const Country = ({results, language, weatherCountry}) => {  

  return(
    <div>
      <h2> {results[0].name.common} </h2>
      <p><strong>Capital:</strong> {results[0].capital[0]}</p>
      <p><strong>Area:</strong> {results[0].area} </p>
      <h3>Languages:</h3>
      <ul>
        {language[0].map(lang => <li key={lang} > {lang} </li> )}
      </ul>
      <img src={results.map(l => l.flags.svg)} alt="flag" width={200} />
      <h3>Wheather in {results.map(res => res.capital)}  </h3>
      <p>temperature {weatherCountry.temperature} Celcius </p>
      <img src={`https://openweathermap.org/img/wn/${weatherCountry.iconWeather}@2x.png`} alt="img" />
      <p> wind {weatherCountry.speedWind}m/s </p>


      
    </div>

  )
}

const NameCountry = ( { results, handleShow } ) => {
  return(
    <>
      {results.map((country, index) => (
      <div key={index}>
        <> {country.name.common} </>
          <button onClick={() => handleShow(country.name.common)} >Show</button>
      </div>))
}
    </>
  )
}

const FindCountries = ( {name, handleChangeName} ) => {
  return(
    <div>
      <label> {`find countries `} </label>
      <input type="text" value={name} onChange={handleChangeName} />
    </div>
  )
}


function App() {
  const [countries, setCountries] = useState([])
  const [name, setName] = useState('')
  const [weatherCountry , setWeatherCountry] = useState([])

  const handleChangeName = (e) => {
    setName(e.target.value)
    console.log(name);
    
  }

  useEffect(() => {
    countriesService.getAll()
    .then(response => setCountries(response))
  },[])

  console.log(countries);
  
  console.log(countries.map(r => r.name.common));
  
  let results = []
  if (!name) {
    results = countries
  }else{
    results = countries.filter(country => (
      country.name.common.toLowerCase().includes(name.toLowerCase())
    ))
  }

  //console.log(results.map(r => Object.values(r.languages)))
  let language = []
  let nameCapital

  if (results.length === 1) {
    language = results.map(r => Object.values(r.languages)) 
    console.log(results);    
    
    nameCapital = results.map(res => res.capital)
    
    countriesService.getWeather(nameCapital)
      .then(res => {
        console.log(res);
        
      setWeatherCountry({
        temperature : res.main.temp,
        speedWind: res.wind.speed,
        iconWeather: res.weather[0].icon 
      })
      console.log(weatherCountry)})
    
      
      

    
  }

  const handleShow = (nameCountry) => {
    setName(nameCountry)    
  }


  
  return (
    <>
      <h1>COUNTRIES</h1>
      <FindCountries name={name} handleChangeName={handleChangeName} />
      <div>
        {results.length === 1 ?
          <Country results={results} language={language} weatherCountry={weatherCountry} />
         : <NameCountry results={results} handleShow={handleShow} />
        }
      </div>
    </>
  )
}

export default App
