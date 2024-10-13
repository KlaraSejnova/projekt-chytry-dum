import { useState } from "react";

export const Light = ({ state, name }) => {
  const [status, setState] = useState(state);

  const clickHandler = () => {
    status == "on" ? setState("off") : setState("on");
  };

  return (
    <div className="light" key={name} onClick={clickHandler}>
      <div className="light__icon">
        <img
          src={
            status == "on"
              ? "../Assets/light-on.svg"
              : "../Assets/light-off.svg"
          }
        />
      </div>
      <div className="light__name">{name}</div>
    </div>
  );
};

export default Light;
