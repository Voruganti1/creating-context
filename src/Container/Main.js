import React from "react";
const Main = () => {
  export const factContext = createContext(undefined);

  const RandomFactContext = (props) => {
    const [randomFact, setRandomFact] = useState("");
    const URL = "https://catfact.ninja/fact";

    async function getData() {
      const response = await axios.get(URL);
      setRandomFact(response.data.fact);
      console.log(randomFact);
    }

    useEffect(() => {
      if (!randomFact) {
        getData();
      }
    }, []);

    return (
      <factContext.Provider
        value={{
          randomFact,
        }}
      >
        {props.children}
      </factContext.Provider>
    );
  };
  return <div></div>;
};
export default Main;
