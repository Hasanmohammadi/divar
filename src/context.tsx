import { createContext } from "react";

export default createContext({
  data: [],
  cityUrl: "",
  locationValue: "",
  suggestionUrl: "",
  wordSearch:"",
  setLocationCity: () => {},
  addCityToLocalStorage: (city: any) => {},
  setDataHomePage: () => {},
  getDataSearch: (e:any) => {},
  goToNextPage: () => {},
  setDataFromSugg:(sugg:any) => {},
  setSearchWord:(e:any) => {}
});
