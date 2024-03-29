import FirstPage from "./components/FirstPage";
import ObserberComponent from "./components/ObserverComponent";

/** @question: ObservedFirstPage를 따로 선언하지 않고 FirstPage 내에서 ObservedComponent화 할 수 있는 방법은? */
const ObservedFirstPage = ObserberComponent(FirstPage, (arg) => console.log(arg));

function App() {
  return (
    <div>
      <ObservedFirstPage />
    </div>
  );
}

export default App;
