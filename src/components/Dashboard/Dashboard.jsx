import Blinds from "../Blinds/Blinds.jsx";
import Climate from "../Climate/Climate.jsx";
import Lights from "../Lights/Lights.jsx";
import Energy from "../Energy/Energy.jsx";
import "./Dashboard.css";

export const Dashboard = ({ data }) => {
  return (
    <main className="dashboard">
      <Lights lights={data}></Lights>
      <Climate
        temperature={data.climate.temperature}
        humidity={data.climate.humidity}
      ></Climate>
      <Blinds state={data.blinds}></Blinds>
      <Energy
        electricity={data.energyConsumption.electricity}
        water={data.energyConsumption.water}
      ></Energy>
    </main>
  );
};

export default Dashboard;
