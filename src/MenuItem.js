import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

/** MenuItem - renders MenuItem component
 *
 * Props:
 * - menuItem 
    {
      "id": "martini",
      "name": "Martini",
      "description": "An ice-cold, refreshing classic.",
      "recipe": "Mix 3 parts vodka & 1 part dry vermouth.",
      "serve": "Serve very cold, straight up."
    }
 * - cantFind - "page not found route"
    
 * State:
 * - none
 *
 * Routes -> Menu -> MenuItem
 */

function MenuItem({ items, cantFind }) {
  const { id } = useParams();

  let menuItem = items.find(menuItem => menuItem.id === id);
  if (!menuItem) return <Redirect to={cantFind} />;

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {menuItem.name}
          </CardTitle>
          <CardText className="font-italic">{menuItem.description}</CardText>
          <p>
            <b>Recipe:</b> {menuItem.recipe}
          </p>
          <p>
            <b>Serve:</b> {menuItem.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default MenuItem;
