export interface ContextType {
  data: never[];
  cityUrl: string;
  locationValue: string;
  suggestionUrl: string;
  wordSearch: string;
  setLocationCity: () => void;
  addCityToLocalStorage: (city: CityType) => void;
  setDataHomePage: () => void;
  getDataSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  goToNextPage: () => void;
  setDataFromSugg: (sugg: string) => void;
  setSearchWord: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface CityType {
  name: string;
  value: string;
}
