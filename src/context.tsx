import { createContext } from "react";

export default createContext({
  data: [],
  cityUrl: "",
  locationValue: "",
  suggestionUrl: "",
  setSugg: (newSug: any) => {},
  setLocationCity: () => {},
  addCityToLocalStorage: (city: any) => {},
  setDataHomePage: () => {},
  setWordSearch: (e:any) => {},
  getDataSearch: (e:any) => {},
  goToNextPage: () => {},
});
