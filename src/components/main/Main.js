import "./Main.css";
import Card from "../card/Card";

const Main = ({filteredData, setFilteredData}) => {
  const displayCountries = filteredData.map((country) => (
    <Card
      country={country}
      key={country.name}
      setFilteredData={setFilteredData}
    />
  ));

  return (
    <div className="main_container">
      {filteredData.length > 1 && displayCountries}
      {filteredData.length === 0 && (
        <h1 className="main_not_valid">Please enter a valid country name</h1>
      )}
    </div>
  );
};

export default Main;
