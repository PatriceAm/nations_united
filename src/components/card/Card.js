import "./Card.css";

const Card = ({country, setFilteredData}) => {
  return (
    <div className="card_container" onClick={() => setFilteredData([country])}>
      <div className="card_inner_container">
        <img src={country.flags.png} alt="" />
        <h2>{country.name}</h2>
      </div>
    </div>
  );
};

export default Card;
