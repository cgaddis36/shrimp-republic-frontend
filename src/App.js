import React, {useState} from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Splash from './components/screens/splash'
import Soft from './components/screens/soft'
import Hard from './components/screens/hard'

function App() {
  const [currentUser, setCurrentUser] = useState('')

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Splash currentUser={currentUser}/>}/>
          <Route path="/softgoods" element={<Soft currentUser={currentUser}/>}/>
          <Route path="/hardgoods" element={<Hard />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App
