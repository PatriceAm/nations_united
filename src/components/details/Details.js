import "./Details.css";

const Details = ({countryData, resetSearch}) => {
  const {
    flags,
    capital,
    nativeName,
    population,
    area,
    region,
    subregion,
    currencies,
    languages,
    topLevelDomain,
  } = countryData;

  return (
    <>
      <div className="back_btn" onClick={resetSearch}>
        BACK TO SEARCH
      </div>
      <div className="details_container">
        <div>
          <h1>{countryData.name.toUpperCase()} </h1>
          <div className="details_inner_container">
            <img src={flags.png} alt="country flag" />
            <div className="country_details">
              <h2>
                Capital:
                <span>{capital}</span>
              </h2>
              <div>
                <p>
                  Native Name: <span>{nativeName}</span>
                </p>
                <p>
                  Population: <span>{population.toLocaleString()}</span>
                </p>
                <p>
                  area: <span>{area}</span>
                </p>
                <p>
                  {" "}
                  Region: <span>{region}</span>
                </p>
                <p>
                  Sub Region: <span>{subregion}</span>
                </p>
                {currencies && (
                  <p>
                    Currency: <span>{currencies[0].code}</span>
                  </p>
                )}
                <p>
                  Languages:{" "}
                  {languages.map((lan) => (
                    <span key={lan.name}>{lan.name.toLocaleString()}</span>
                  ))}
                </p>
                <p>
                  Internet domain: <span>{topLevelDomain}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
