import Blinds from "../Blinds/Blinds.jsx";
import Climate from "../Climate/Climate.jsx";
import Lights from "../Lights/Lights.jsx";
import Energy from "../Energy/Energy.jsx";
import "./Dashboard.css";

export const Dashboard = ({ data }) => {
  return (
    <main className="dashboard">
      <Lights lights={data}></Lights>
      <Climate climate={data}></Climate>
      <Blinds data={data}></Blinds>
      <Energy energy={data}></Energy>
    </main>
  );
};

export default Dashboard;
