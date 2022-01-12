import { Link } from "react-router-dom";
import React from "react";
import "./Menu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem
} from "reactstrap";

/** Menu - renders menus component
 *
 * Props:
 * - menu - array of menu items
 * [
     {
        "id": "martini",
        "name": "Martini",
        "description": "An ice-cold, refreshing classic.",
        "recipe": "Mix 3 parts vodka & 1 part dry vermouth.",
        "serve": "Serve very cold, straight up."
      },...
    ] 
 *
 * State:
 * - none
 *
 * App -> Routes -> Menu
 */

function Menu({ menu }) {
  const { menuTitle, menuItems } = menu;
  return (
    <section className="col-md-4">
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {menuTitle} Menu
          </CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <ListGroup>
            {menuItems.map(menuItem => (
              <Link
                to={`/${menuTitle.toLowerCase()}/${menuItem.id}`}
                key={menuItem.id}
              >
                <ListGroupItem>{menuItem.name}</ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </section>
  );
}

export default Menu;
