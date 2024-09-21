import React from "react";
import './RacipeApp/style.css'
import Meal from './RacipeApp/Meal.jsx'
import {Routes, Route} from 'react-router-dom'
import RecipeInfo from "./RacipeApp/RecipeInfo.jsx";
// import Home from "./Screens/Home/Home";
// import Main from "./Main";
function App() {
  return (
    // <div>
    //   {/* <Home /> */}
    //  <Main/>
    // </div>
    <>
      <Routes>
      <Route path='/' element={<Meal/>}/>
      <Route path="/:MealId" element={<RecipeInfo/>}/>
      </Routes>
    </>
  );
}
export default App;