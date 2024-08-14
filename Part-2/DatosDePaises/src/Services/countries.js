import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";
const api_key = import.meta.env.VITE_SOME_KEY
const baseUrl_ApiWeather = 
`https://api.openweathermap.org`;



const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const getWeather = (lat, lon) => {
    const request = axios.get(
      baseUrl_ApiWeather +
        `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`
    );
    return request.then(response => response.data)
}

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const eliminate = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request;
};

export default {
  getAll,
  getWeather,
  create,
  update,
  eliminate,
};
