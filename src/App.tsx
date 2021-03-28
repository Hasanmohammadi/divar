import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Context from "./context";
import "./App.css";

import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";

function App() {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");
  const [locationValue, setlocationValue] = useState("");
  const [suggestionUrl, setSuggestionUrl] = useState("");
  const [wordSearch, setWordSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    setLocationCity();

    const getData = async () => {
      try {
        fetch(
          `https://api.divar.ir/v8/web-search/${locationValue}/${suggestionUrl}`
        )
          .then((response) => response.json())
          .then((d) => setData(d));
        console.log("fetched");
        console.log(locationValue);
        
      } catch (error) {
        console.log(error);
      }
    };
    
    getData();

    console.log(data);
  }, [locationValue, suggestionUrl]);

  const addCityToLocalStorage = (city: any) => {
    localStorage.setItem("divarLocation", JSON.stringify(city));
    setLocation(city.name);

    setlocationValue(city.value);
    console.log("clicked");
  };

  const setLocationCity = () => {
    const getLocation: any = localStorage.getItem("divarLocation");
    if (getLocation === null) {
      return;
    }
    const location = JSON.parse(getLocation);
    setLocation(location.name);
    setlocationValue(location.value);
  };

  const setSugg = (newSug: any) => {
    setSuggestionUrl(newSug);
  };

  const setDataHomePage = async () => {
    try {
      fetch(`https://api.divar.ir/v8/web-search/${locationValue}`)
        .then((response) => response.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error);
    }

    setSuggestionUrl("");
  };

  const getDataSearch = async (e: any) => {
    e.preventDefault();
    setWordSearch(e.target.children[0].value);

    try {
      fetch(
        `https://api.divar.ir/v8/web-search/${locationValue}?q=${e.target.children[0].value}`
      )
        .then((response) => response.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error);
    }

    // console.log(wordSearch);
  };

  const goToNextPage = async () => {
    try {
      fetch(
        `https://api.divar.ir/v8/web-search/${locationValue}/${suggestionUrl}?page=${pageNumber}`
      )
        .then((responce) => responce.json())
        .then((d) =>
          setData( {
            ...data,
            //@ts-ignore
            widget_list:data.widget_list.concat(d.widget_list)
          })
        );
      setPageNumber((pre) => pre + 1);
    } catch (error) {
      console.log(error);
    }
  };
  if (data.length === 0) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      {/*@ts-ignore*/}
      <Context.Provider
        value={{
          data,
          cityUrl: location,
          locationValue,
          suggestionUrl,
          setSugg,
          setLocationCity,
          addCityToLocalStorage,
          setDataHomePage,
          setWordSearch,
          getDataSearch,
          goToNextPage,
        }}
      >
        <BrowserRouter>
          <Navbar />
          <Header />
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
