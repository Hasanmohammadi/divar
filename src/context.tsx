import { createContext } from "react";
import {ContextType} from './../types';

export default createContext<ContextType>({
  data: [],
  cityUrl: "",
  locationValue: "",
  suggestionUrl: "",
  wordSearch:"",
  setLocationCity: () => {},
  addCityToLocalStorage: (city) => {},
  setDataHomePage: () => {},
  getDataSearch: (e) => {},
  goToNextPage: () => {},
  setDataFromSugg:(sugg) => {},
  setSearchWord:(e) => {}
});
