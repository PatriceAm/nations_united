import Dropdown from "../dropdown/Dropdown";
import "./Inputs.css";

const Inputs = () => {
  return (
    <div className="inputs_container">
      <input type="text" placeholder="Search for a country ..." />
      <Dropdown />
    </div>
  );
};

export default Inputs;
