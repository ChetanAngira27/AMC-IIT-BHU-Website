import React from 'react'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import { Routes, Route } from 'react-router-dom'
import Resources from './pages/Resources'
import Ros from './components/ResourcesComp/Ros'
import Ardupilot from './components/ResourcesComp/Ardupilot'
import PX4Installation from './components/ResourcesComp/Px4'
import DroneComponentSelection from './components/ResourcesComp/DroneComponentSelection'
import Members from './pages/Members'
import Projects from './pages/Projects'
import Competetions from './pages/Competeitions'
import Victory from './pages/Victory'
import AeroArcadeEx from './components/Explore/AeroArcadeEx'
import Wintercamp from './components/Explore/Wintercamp'
import SummerCamp from './components/Explore/SummerCamp'
import Vtolexplore from './components/Explore/Vtolexplore'
import AeroArcadeRegister from './components/ResourcesComp/RegisterComp/AeroArcadeRegister'
import WinterCampRegister from './components/ResourcesComp/RegisterComp/WinterCampRegister'
import SummercampRegister from './components/ResourcesComp/RegisterComp/SummercampRegister'
import VtolCompRegister from './components/ResourcesComp/RegisterComp/VtolCompRegister'
import Alumni from './pages/Alumni'
import Authors from './pages/Authors'
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/resources" element={<Resources/>}></Route>
          <Route path="/resources/ros" element={<Ros></Ros>}></Route>
          <Route path="/resources/ardupilot" element={<Ardupilot></Ardupilot>}></Route>
          <Route path="/resources/px4" element={<PX4Installation></PX4Installation>}></Route>
          <Route path="/resources/components" element={<DroneComponentSelection/>}></Route>
          <Route path="/helm" element={<Members/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/competitions' element={<Competetions/>}></Route>
          <Route path='/victory' element={<Victory/>}></Route>
          <Route path='/explore/arcade' element={<AeroArcadeEx/>}></Route>
          <Route path='/explore/winter' element={<Wintercamp/>}></Route>
          <Route path='/explore/vtol' element={<Vtolexplore/>}></Route>
          <Route path='/explore/summer' element={<SummerCamp/>}></Route>
          <Route path='/register/AeroArcade' element={<AeroArcadeRegister/>}></Route>
          <Route path='/register/winter' element={<WinterCampRegister/>}></Route>
          <Route path='/register/summer' element={<SummercampRegister/>}></Route>
          <Route path='/register/vtol' element={<VtolCompRegister/>}></Route>
          <Route path='/alumni' element={<Alumni/>}></Route>
          <Route path='/authors' element={<Authors/>}></Route>
        </Routes>
    </div>
  )
}

export default App
