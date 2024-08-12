import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const getCountry = (name) => {
    const request = axios.get(
      `https://studies.cs.helsinki.fi/restcountries/api/name/${name}`);
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
  getCountry,
  create,
  update,
  eliminate,
};
