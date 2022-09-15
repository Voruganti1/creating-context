import React, { useContext } from "react";
import { useBodyOfContext } from "./Main";

const RenderId = () => {
  const { data, userId, sortFunction } = useBodyOfContext();

  return <p>{data}</p>;
};

export default RenderId;
