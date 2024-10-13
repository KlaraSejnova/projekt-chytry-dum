import { Light } from "./Light";
import "./Lights.css";
import { v4 as uuidv4 } from "uuid";

export const Lights = ({ lights }) => {
  return (
    <div className="lights">
      {lights.lights.map((light) => (
        <Light name={light.name} state={light.state} key={uuidv4()}></Light>
      ))}
    </div>
  );
};

export default Lights;
