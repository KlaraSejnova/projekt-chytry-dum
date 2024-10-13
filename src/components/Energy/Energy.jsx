import "./Energy.css";

export const Energy = ({ electricity, water }) => {
  return (
    <div className="energy">
      <div className="energy__source">
        <div className="energy__icon">
          <img src="../Assets/electricity.svg" />
        </div>
        <div className="energy__consumption">
          <div className="energy__description">Elektřina</div>
          <div className="energy__value">{electricity} kW</div>
        </div>
      </div>
      <div className="energy__source">
        <div className="energy__icon">
          <img src="../Assets/water.svg" />
        </div>
        <div className="energy__consumption">
          <div className="energy__description">Voda</div>
          <div className="energy__value">
            {water} m<sup>3</sup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Energy;
