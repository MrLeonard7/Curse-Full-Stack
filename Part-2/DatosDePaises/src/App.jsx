import { useEffect, useState } from "react"
import countriesService from "./Services/countries"


function App() {
  const [countries, setCountries] = useState([])
  const [name, setName] = useState('')

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
  if (results.length === 1) {
    language = results.map(r => Object.values(r.languages)) 
    console.log(results.map(l => l.flags.svg));
    
  }
  

  
  return (
    <>
      <h1>COUNTRIES</h1>
      <div>
        <label>find countries</label>
        <input type="text" value={name} onChange={handleChangeName} />
      </div>
      <div>
        {results.length === 1 ?
           <div>
            <h2> {results[0].name.common} </h2>
            <p><strong>Capital:</strong> {results[0].capital[0]}</p>
            <p><strong>Area:</strong> {results[0].area} </p>
            <h3>Languages:</h3>
            <ul>
              {language[0].map(lang => <li key={lang} > {lang} </li> )}
            </ul>
            <img src={results.map(l => l.flags.svg)} alt="flag" width={200} />
           </div>
         :results.map((country, index) =>
           <p key={index} > {country.name.common} </p> ) }
      </div>
    </>
  )
}

export default App
