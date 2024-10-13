import { useState } from "react";
import "./Climate.css";

export const Climate = ({ temperature, humidity }) => {
  const [temp, setTemp] = useState(temperature);

  const upHandler = () => {
    setTemp(temp + 1);
  };

  const downHandler = () => {
    setTemp(temp - 1);
  };

  return (
    <div className="climate">
      <div className="climate__icon">
        <img src="../Assets/temp.svg" />
      </div>
      <div className="climate__content">
        <div className="climate__temperature">{temp}&deg;C</div>
        <div className="climate__humidity">
          Vlhost vzduchu {humidity}&nbsp;%
        </div>
      </div>
      <div className="climate__controls">
        <button className="button" onClick={upHandler}>
          +
        </button>
        <button className="button" onClick={downHandler}>
          -
        </button>
      </div>
    </div>
  );
};

export default Climate;
