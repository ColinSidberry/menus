import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import Routes from "./Routes";
import { addId } from "./utils";

import "./App.css";

/** Web App for The Closure Cafe
 *
 * Props:
 * - none
 *
 * State:
 * - menus: { snacks: { menuTitle: "Snacks", menuItems: snacks },
 *            drinks: { menuTitle: "Drinks", menuItems: drinks } }
 * - newMenuItem: "menuItemName"
 *
 * App -> (NavBar, Routes)
 */

function App() {
  const [menus, setMenus] = useState(null);
  const [newMenuItem, setNewMenuItem] = useState();

  /*Pulls snacks and drinks data from database 
  * on initial render 
  * and when snacks/drinks data changes*/
  useEffect(() => {
    async function getMenus() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      let drinks = await SnackOrBoozeApi.getDrinks();
      setMenus(oldMenus => ({
        ...oldMenus,
        snacks: { menuTitle: "Snacks", menuItems: snacks },
        drinks: { menuTitle: "Drinks", menuItems: drinks }
      }));
    }
    //TODO: Add try/catch around the api calls and add error state

    getMenus();
  }, [newMenuItem]);

  //Adds snack to database
  async function addSnack(suggestion) {
    suggestion = addId(suggestion);
    let res = await SnackOrBoozeApi.addSnack(suggestion);
    setNewMenuItem(res);
    // console.log("add snack res: ", res);
  }

  //adds drink to database
  async function addDrink(suggestion) {
    suggestion = addId(suggestion);
    let res = await SnackOrBoozeApi.addDrink(suggestion);
    setNewMenuItem(res);
    // console.log("add drink res: ", res);
  }

  if (!menus) return <p>Loading...</p>;

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes
          snacks={menus.snacks}
          drinks={menus.drinks}
          addSnack={addSnack}
          addDrink={addDrink} />
      </BrowserRouter>
    </div>
  );
}

export default App;
