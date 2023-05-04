import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { FirstPage } from "./page/FirstPage";
import { SecondPage } from "./page/SecondPage";
import { HomePage } from "./page/HomePage";
import { BuildContainer } from "./page/BuildContainer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="first" element={<FirstPage />} />
        <Route path="second" element={<SecondPage />} />
      </Routes>
      <Routes>
        <Route path="build" element={<BuildContainer />} >
          <Route path="first" element={<FirstPage />} />
          <Route path="second" element={<SecondPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
