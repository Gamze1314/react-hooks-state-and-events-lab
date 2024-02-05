import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const [ isDarkMode ,  setDarkMode ] = useState(false)
 
  function handleDarkMode(e){ // click event 
    setDarkMode(!isDarkMode)   
  } 
 // update the className of the div based on your state variable
 const appClass = isDarkMode ? "App dark" : "App light"

 // appClass is being updated depending on state => true/false
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>{isDarkMode ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
