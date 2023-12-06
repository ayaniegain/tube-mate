import { Routes, Route,  } from 'react-router-dom';
import './App.css'
import LandingPage from './components/LandingPage'
import ResultsPage from './components/ResultsPage'


function App() {

  return (
    <div>
     <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/results" element={<ResultsPage />} />
    </Routes>
  </div>
  )
}

export default App
