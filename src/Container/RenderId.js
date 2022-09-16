import React, { useContext } from "react";
import { useBodyOfData } from "./Main";
import "./RenderId.css";

const RenderId = () => {
  const { data, userId } = useBodyOfData();
  console.log("this data is from renderid", data);
  return (
    <div className="grid">
      {data &&
        data.map((id) => (
          <p className="displayItems" key={id}>
            {id}
          </p>
        ))}
    </div>
  );
};
export default RenderId;
