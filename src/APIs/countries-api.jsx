import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1/",
});

// get all countries data

export const fetchAllCountriesDetails = async () => {
  return await api.get("all?fields=name,capital,region,languages,flags");
};
