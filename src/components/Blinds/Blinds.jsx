import { useState } from "react";
import "./Blinds.css";

export const Blinds = ({ data }) => {
  const [open, setOpen] = useState(data.blinds);
  const clickHandler = () => {
    open == "open" ? setOpen("off") : setOpen("open");
  };

  return (
    <div className="blinds">
      <div className="blinds__icon">
        <img
          src={
            open == "open"
              ? "../Assets/blinds-open.svg"
              : "../Assets/blinds-closed.svg"
          }
        />
      </div>
      <div className="blinds__name">Žaluzie</div>
      <div className="blinds__controls">
        <button
          className={open == "open" ? "button button--active" : "button"}
          onClick={clickHandler}
        >
          Otevřeno
        </button>
        <button
          className={open == "open" ? "button" : "button button--active"}
          onClick={clickHandler}
        >
          Zavřeno
        </button>
      </div>
    </div>
  );
};

export default Blinds;
