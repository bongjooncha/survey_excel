import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TestProvider } from './contexts/TestContext';
import StartPage from './pages/StartPage';
import TestPage from './pages/TestPage';
import ResultPage from './pages/ResultPage';
import SeeOthers from './pages/SeeOthers';

function App() {
  return (
    <TestProvider>
      <Router>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/result" element={<ResultPage />} />
          <Route path="/others" element={<SeeOthers />} />
        </Routes>
      </Router>
    </TestProvider>
  );
}

export default App;
