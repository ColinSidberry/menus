import React from "react";
import { Card, CardBody, CardText, CardTitle } from "reactstrap";

/** Home - renders # of drink and snack items
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
 *
 * State:
 * - none
 *
 * App -> Routes -> Home
 */

function Home({ snacks, drinks }) {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </h3>
          </CardTitle>
          <CardText>
            Come choose from our selection of <b>{snacks.menuItems.length}</b> snacks
            and <b>{drinks.menuItems.length}</b> drinks!
          </CardText>
        </CardBody>
      </Card>
    </section>
  );
}


export default Home;
