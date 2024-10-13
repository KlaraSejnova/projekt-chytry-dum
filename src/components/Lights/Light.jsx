import { useState } from "react";

export const Light = ({ light }) => {
  const [state, setState] = useState(light.state);

  const clickHandler = () => {
    state == "on" ? setState("off") : setState("on");
  };

  return (
    <>
      <div className="light" onClick={clickHandler}>
        <div className="light__icon" key={light.name}>
          <img
            src={
              state == "on"
                ? "../Assets/light-on.svg"
                : "../Assets/light-off.svg"
            }
          />
        </div>
        <div className="light__name">{light.name}</div>
      </div>
    </>
  );
};

export default Light;
