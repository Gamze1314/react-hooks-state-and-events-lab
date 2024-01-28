import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

  const [ isDarkMode ,  setDarkMode ] = useState(false)
  console.log(isDarkMode)

  function handleButton(){

    setDarkMode(!isDarkMode)
    console.log(isDarkMode)
   
  } 
 // update the className of the div based on your state variable
 const text = isDarkMode ? "Dark Mode" : "Light Mode"
 const appClass = isDarkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleButton}>{text}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
