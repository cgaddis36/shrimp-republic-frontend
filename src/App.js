import React, {useState} from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Splash from './components/screens/splash'

function App() {
  const [currentUser, setCurrentUser] = useState('')

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Splash currentUser={currentUser}/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App
