import { useEffect, useState } from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import { CityType } from "./../types";
import "./App.css";
import FirstPage from "./Components/AtFirst/FirstPage";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Context from "./context";

const url: string = "https://api.divar.ir/v8/web-search";

function App() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState<string>("");
  const [locationValue, setlocationValue] = useState<string>("");
  const [suggestionUrl, setSuggestionUrl] = useState<string>("");
  const [wordSearch, setWordSearch] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);

  const history = useHistory();

  useEffect(() => {
    setLocationCity();

    const getData = async () => {
      try {
        fetch(`${url}/${locationValue}/${suggestionUrl}`)
          .then((response) => response.json())
          .then((d) => setData(d));
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [locationValue, suggestionUrl]);

  const addCityToLocalStorage = (city: CityType): void => {
    localStorage.setItem("divarLocation", JSON.stringify(city));
    setLocation(city.name);

    setlocationValue(city.value);
  };

  const setLocationCity = (): void => {
    const getLocation: any = localStorage.getItem("divarLocation");
    if (getLocation === null) {
      return;
    }
    const location = JSON.parse(getLocation);
    setLocation(location.name);
    setlocationValue(location.value);
  };

  const setDataHomePage = async () => {
    try {
      fetch(`${url}/${locationValue}`)
        .then((response) => response.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error);
    }

    setSuggestionUrl("");
    setWordSearch("");
  };

  const getDataSearch = async (
    word: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    try {
      fetch(`${url}/${locationValue}?q=${word}`)
        .then((response) => response.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error);
    }
    history.push(`/${locationValue}?q=${word}`);
  };

  const goToNextPage = async () => {
    try {
      fetch(`${url}/${locationValue}/${suggestionUrl}?page=${pageNumber}`)
        .then((responce) => responce.json())
        .then((d) =>
          setData((pre) => {
            return {
              ...pre,
              //@ts-ignore
              widget_list: pre.widget_list.concat(d.widget_list),
            };
          })
        );
      setPageNumber((pre) => pre + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const setDataFromSugg = async (subject: string) => {
    setSuggestionUrl(subject);
    try {
      fetch(`${url}/${locationValue}/${subject}`)
        .then((response) => response.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error);
    }
    setWordSearch("");
  };

  if (locationValue === "") {
    return (
      <Context.Provider
        //@ts-ignore
        value={{
          addCityToLocalStorage,
        }}
      >
        <FirstPage />
      </Context.Provider>
    );
  }

  if (data.length === 0) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <Context.Provider
        value={{
          data,
          cityUrl: location,
          locationValue,
          suggestionUrl,
          wordSearch,
          setLocationCity,
          addCityToLocalStorage,
          setDataHomePage,
          getDataSearch,
          goToNextPage,
          setDataFromSugg,
        }}
      >
        <Navbar />
        <Header />
        <Route
          path="/"
          render={() => <Redirect to={`/${locationValue}`} />}
          exact
        />
      </Context.Provider>
    </div>
  );
}

export default App;
