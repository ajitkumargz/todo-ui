import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from './pages/Home'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import FooterBar from './components/FooterBar'

function App() {

  return (
    <div>
      <div className='mainapp'>
        <Router>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/taskform">Add Todo Task</Link>
            <Link to='/tasklist'>Todo List</Link>
          </nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/taskform' element={<TaskForm />} />
            <Route path='/tasklist' element={<TaskList />} />
          </Routes>
        </Router>
        <FooterBar />
      </div>
    </div>
  )
}

export default App
