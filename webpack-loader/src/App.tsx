import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { TestPage } from './page/TestPage';

function App() {
  console.log(`$LOADER_PATH_BASENAME`, "에서 console.log가 실행되었습니다.");
  return (

    <Routes>
      <Route index={true} element={
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <Link
              className="App-link"
              to="/test"
            >
              Learn React
            </Link>
          </header>
            </div>
        } />
      <Route path="test" element={<TestPage />} />
    </Routes>
  );
}

export default App;
