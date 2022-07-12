import "./Main.css";
import Card from "../card/Card";
import Details from "../details/Details";

const Main = ({filteredData}) => {
  const displayCountries = filteredData.map((country) => (
    <Card country={country} key={country.name} />
  ));

  return (
    <div className="main_container">
      {filteredData.length > 1 && displayCountries}
      {filteredData.length === 1 && <Details countryData={filteredData[0]} />}
      {filteredData.length === 0 && <h1>Please enter a valid country name</h1>}
    </div>
  );
};

export default Main;
