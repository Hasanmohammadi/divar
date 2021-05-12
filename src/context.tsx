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
  getDataSearch: (word) => {},
  goToNextPage: () => {},
  setDataFromSugg:(sugg) => {},
});


const DivarContext:React.FC = () => {










  

  return(
    <div>

    </div>
  )
}

