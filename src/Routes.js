import React from "react";
import { Route, Switch } from "react-router-dom";

import SuggestionsForm from "./SuggestionsForm";
import NotFound from "./NotFound";
import MenuItem from "./MenuItem";
import Menu from "./Menu";
import Home from "./Home";

/** Routes
 *
 * Props:
 * - snacks - array of snack objects
        [{
            "id": "nachos",
            "name": "Nachos",
            "description": "An American classic!",
            "recipe": "Cover expensive, organic tortilla chips with Cheez Whiz.",
            "serve": "Serve in a hand-thrown ceramic bowl, garnished with canned black olives"
            },...] 
 * - drinks - array of drink objects
        [{
                "id": "martini",
                "name": "Martini",
                "description": "An ice-cold, refreshing classic.",
                "recipe": "Mix 3 parts vodka & 1 part dry vermouth.",
                "serve": "Serve very cold, straight up."
            },...] 
 * - addSnack - function to add snack to the database
 * - addDrink - function to add snack to the database
 *
 * State:
 * - none
 *
 * App -> Routes
 */

function Routes({ snacks, drinks, addSnack, addDrink }) {
    return (
        <main>
            <Switch>
                <Route exact path="/">
                    <Home snacks={snacks} drinks={drinks} />
                </Route>
                <Route exact path="/snacks">
                    <Menu menu={snacks} title="Snacks" />
                </Route>
                <Route exact path="/snacks/:id">
                    <MenuItem items={snacks.menuItems} cantFind="/snacks" />
                </Route>
                <Route exact path="/drinks">
                    <Menu menu={drinks} title="Drinks" />
                </Route>
                <Route exact path="/drinks/:id">
                    <MenuItem items={drinks.menuItems} cantFind="/drinks" />
                </Route>
                <Route exact path="/suggestions">
                    <SuggestionsForm addSnack={addSnack} addDrink={addDrink} />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </main>
    );
}

export default Routes;