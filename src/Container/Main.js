import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { useContext } from "react";

export const bodyOfContext = createContext(undefined);
const URL = "https://jsonplaceholder.typicode.com/posts";

const Main = (props) => {
  const [data, setData] = useState(null);
  const [userId, setUserId] = useState(null);

  async function getData() {
    const response = await axios.get(URL);

    const idList = response.data.map((a) => a.id);

    setData(idList);
    setUserId(response.data.map((a) => a.userId));
  }

  useEffect(() => {
    if (!data) {
      getData();
    }
  }, []);

  console.log("data inside async function", data);

  return (
    <bodyOfContext.Provider
      value={{
        data,
        userId,
        sortFunction: () => console.log("sorted"),
      }}
    >
      {props.children}
    </bodyOfContext.Provider>
  );
};

export function useBodyOfData() {
  const context = useContext(bodyOfContext);

  if (!context) {
    throw new Error("useBodyOfData custom hook doesn't work properly");
  }

  return context;
}

export default Main;
