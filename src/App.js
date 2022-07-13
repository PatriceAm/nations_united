import {useState, useEffect} from "react";

import axios from "axios";

import Header from "./components/header/Header";
import Inputs from "./components/inputs/Inputs";
import Main from "./components/main/Main";
import Details from "./components/details/Details";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [continent, setContinent] = useState("");
  const [searchBy, setSearchBy] = useState("");
  const [resetSearch, setResetSearch] = useState(true);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => setData(response.data));
  }, []);

  useEffect(() => {
    const cleanData = data.filter((country) =>
      country.region.toLowerCase().includes(continent.toLowerCase())
    );

    const selectionByCountryName = cleanData.filter((country) =>
      country.name.toLowerCase().includes(searchBy.toLowerCase())
    );
    setFilteredData(selectionByCountryName);
  }, [searchBy, data, continent]);

  useEffect(() => {
    const selectionByContinent = data.filter((country) =>
      country.region.toLowerCase().includes(continent.toLowerCase())
    );
    setFilteredData(selectionByContinent);
  }, [continent, data, resetSearch]);

  const newSearch = () => {
    setResetSearch(!resetSearch);
  };

  return (
    <div>
      <Header />
      {filteredData.length === 1 && (
        <Details countryData={filteredData[0]} resetSearch={newSearch} />
      )}
      {filteredData.length !== 1 && (
        <Inputs
          setSearchBy={setSearchBy}
          setContinent={setContinent}
          continent={continent}
          filteredData={filteredData}
          newSearch={newSearch}
        />
      )}
      {data.length ? (
        <Main filteredData={filteredData} setFilteredData={setFilteredData} />
      ) : (
        <h1 className="loading">Loading ...</h1>
      )}
    </div>
  );
};

export default App;
