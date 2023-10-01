import React from "react";
import DriverCard from "./DriverCard";
import "./DriverList.css";
import { useSelector } from "react-redux";

const DriversList = () => {
  const drivers = useSelector((state) => state.drivers);

  return (
    <div className="wrapper">
      {drivers.drivers.map((driver) => (
        <DriverCard
          key={driver.id}
          id={driver.id}
          name={driver.name}
          image={driver.image.url}
          teams={driver.teams}
        />
      ))}
    </div>
  );
};

export default DriversList;
