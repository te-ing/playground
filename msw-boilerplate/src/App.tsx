import axios from "axios";
import { useState } from "react";

function App() {
  const [res, setRes] = useState("none");
  const getJson = async (date?: "20221120" | "20221127" | "20221204" | "20221211") => {
    const { data } = await axios(`json?date=${date}`);
    const result = data?.date || JSON.stringify(new Date()).slice(1, 11);
    setRes(result);
  };

  const menu: { [key: string]: number } = {
    apple: 5000,
    banana: 2000,
  };

  // https://soobing.github.io/javascript/metaprogramming/
  const fruitHandler: ProxyHandler<{ [key: string | symbol]: number }> = {
    get(target, prop) {
      if (prop === "사과") return target.apple;
      if (prop === "바나나") return target.banana;
      return target[prop];
    },
    set(target, prop, value) {
      try {
        target[prop] = value;
        return true;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  };

  const onClickFruits = async () => {
    const { data }: { data: string[] } = await axios(`fruits`);
    console.log(menu[data[0]]);
  };
  const onClick과일 = async () => {
    const { data }: { data: string[] } = await axios(`과일`);
    const proxyMenu = new Proxy(menu, fruitHandler);
    console.log(proxyMenu[data[0]]);
    console.log(Reflect.get(proxyMenu, data[1]));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "30px" }}>
      MSW
      <h3>{res}</h3>
      <div>
        <button type="button" onClick={() => getJson()}>
          today
        </button>
        <button type="button" onClick={onClickFruits}>
          Fruits
        </button>
        <button type="button" onClick={onClick과일}>
          과일
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
