import FirstPage from "./components/FirstPage";
import ObserberComponent from "./components/ObserberComponent";
interface MyComponentProps {
  text: string;
}

const ObserveredComponent = ObserberComponent(FirstPage);
function App() {
  function handleEvent(event: string, target: HTMLElement) {
    console.log(`Received ${event} event from ${target}`);
  }

  return <ObserveredComponent event="test" payload={{ testPayload: "hello" }} />;
}

export default App;
