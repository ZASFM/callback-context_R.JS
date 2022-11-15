import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktails from './pages/SingleCocktails'
import Error from './pages/Error'

const App=()=>{
   return (
      <Routes>
         <Route
            path="/"
            element={<Home/>}
         />

         <Route
            path="/about"
            element={<About/>}
         />

         <Route
            path="cocktails/:id"
            element={<SingleCocktails/>}
         />

         <Route
            path="*"
            element={<Error/>}
         />
      </Routes>
   )
}

export default App;