import { Light } from "./Light";
import "./Lights.css";

export const Lights = ({ lights }) => {
  return (
    <div className="lights" key={"lights"}>
      {lights.lights.map((light) => (
        <Light light={light}></Light>
      ))}
    </div>
  );
};

export default Lights;
