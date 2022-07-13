import {useEffect, useState} from "react";
import Dropdown from "../dropdown/Dropdown";
import "./Inputs.css";

const Inputs = ({
  setSearchBy,
  setContinent,
  continent,
  filteredData,
  newSearch,
}) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (filteredData.length === 1) {
      newSearch();
    }
    setSearchBy(search);
    // eslint-disable-next-line
  }, [search]);

  return (
    <div className="inputs_container">
      <input
        type="text"
        placeholder="Search for a country ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {continent.length ? (
        <h2>
          Selected continent: <span>{continent}</span>
        </h2>
      ) : (
        <h2>Please select a continent.</h2>
      )}
      <Dropdown setContinent={setContinent} />
    </div>
  );
};

export default Inputs;
