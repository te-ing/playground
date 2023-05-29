import axios from "axios";
import { useState } from "react";

function App() {
  const [res, setRes] = useState("none");
  const getJson = async (date?: "20221120" | "20221127" | "20221204" | "20221211") => {
    const { data } = await axios(`json?date=${date}`);
    const result = data?.date || JSON.stringify(new Date()).slice(1, 11);
    setRes(result);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "30px" }}>
      MSW
      <h3>{res}</h3>
      <div>
        <button type="button" onClick={() => getJson()}>
          today
        </button>
        <button type="button" onClick={() => getJson("20221120")}>
          20221120
        </button>
        <button type="button" onClick={() => getJson("20221127")}>
          20221127
        </button>
        <button type="button" onClick={() => getJson("20221204")}>
          20221204
        </button>
        <button type="button" onClick={() => getJson("20221211")}>
          20221211
        </button>
      </div>
    </div>
  );
}

export default App;
