export interface ContextType {
  data: never[];
  cityUrl: string;
  locationValue: string;
  suggestionUrl: string;
  wordSearch: string;
  setLocationCity: () => void;
  addCityToLocalStorage: (city: CityType) => void;
  setDataHomePage: () => void;
  getDataSearch: (word:string , e: React.ChangeEvent<HTMLInputElement>) => void;
  goToNextPage: () => void;
  setDataFromSugg: (sugg: string) => void;
}
export interface CityType {
  name: string;
  value: string;
}

export interface SuggestionType {
  displayed_text: string;
  value: {
    category: {
      value: string;
    };
  };
}

export interface city {
  name: string;
  value: string;
}

export interface cities {
  popularCity: city[];
  allCity: string[];
}
