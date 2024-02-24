import { useState } from 'react'
import Navigation from './components/navigation'
import Home from './components/home'
import About from './components/about'
import './App.css'
import {
  createBrowserRouter, 
  Route, 
  RouterProvider,
  Routes
} from "react-router-dom";
import styled from 'styled-components'

const StyledBody = styled.body`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

function Root() {
  const [color, setColor] = useState('white')
  return (
    <StyledBody style={{backgroundColor: color}}>
      <Navigation />
      <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </StyledBody>
  )
}

const router = createBrowserRouter(
  [{path:"*", Component: Root}]
)

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
