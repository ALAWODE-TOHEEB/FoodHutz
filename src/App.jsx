// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import BestChef from "./components/BestChef"
import Footer from "./components/Footer"
import GalleryStore from "./components/GalleryStore"
import ImageContainerComponent from "./components/ImageContainerComponent"
import Latest from "./components/Latest"
import MenuList from "./components/MenuList"
import Online from "./components/Online"
import ResthoNew from "./components/ResthoNew"
import ScrollNavbarComponent from "./components/ScrollNavbarComponent"

function App() {
 

  return (
    <>
    <div>
<div className="z-[99]">
    <ScrollNavbarComponent/>
</div>
    <ImageContainerComponent/>
    <ResthoNew/>
    <MenuList/>
    <GalleryStore/>
    <BestChef/>
    <Online/>
    <Latest/>
    <Footer/>
    </div>
     
    </>
  )
}

export default App
