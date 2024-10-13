import Header from "../../components/Header/Header";
import "./style.css";
import smartHomeData from "../../smartHomeData.js";
import Dashboard from "../../components/Dashboard/Dashboard.jsx";

export const HomePage = () => {
  return (
    <div className="container">
      <Header title="Chytrý dům"></Header>
      <Dashboard data={smartHomeData}></Dashboard>{" "}
    </div>
  );
};
