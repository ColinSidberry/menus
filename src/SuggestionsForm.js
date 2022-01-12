import React, { useState } from "react";
import { Button, Card, CardBody, CardTitle } from "reactstrap";

/** Suggestions Form  
 * Renders form for user to add drinks and snacks to the menu database
 *
 * Props:
 * - addSnack - function to add snack to the database
 * - addDrink - function to add snack to the database
 *
 * State:
 * - formData -
  * {
      type: "",
      name: "",
      description: "",
      name: "",
      recipe: "",
      serve: ""
    }
 *
 * App -> Routes -> SuggestionsForm
 */

function SuggestionsForm({ addSnack, addDrink }) {
  const INITIAL_DATA = {
    type: "",
    name: "",
    description: "",
    name: "",
    recipe: "",
    serve: ""
  }
  const [formData, setFormData] = useState(INITIAL_DATA);

  /**Handles form input changes*/
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  /**Handles form submission.
   * Input: evt object
   * Adds drink/snack to the menus database.
   */
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("form data from SuggestionForm: ", formData);
    let { type } = formData;
    type = type.toLocaleLowerCase();
    console.log("type from SuggestionsForm: ", type);
    delete formData.type;

    if (type === 'snack') {
      console.log("in snack one");
      addSnack(formData);
    } else if (type === 'drink') {
      console.log("in drink one");
      addDrink(formData);
    }
    setFormData(INITIAL_DATA);
  }
  // TODO: Does setting default form values mess up the form being controlled by React
  // TODO: How to may a select tag controlled by React
  return (
    <Card>
      <CardBody className="m-5">
        <form onSubmit={handleSubmit}>
          {/* <label htmlFor="type">Type:</label>
              <select value={formData.type} id="type" name="type" onChange={handleChange}>
                <option value="Drink">Snack</option>
                <option value="Snack">Drink</option>
              </select> */}
          <CardTitle>
            <label htmlFor="type">Enter "drink" or "snack":</label>
          </CardTitle>
          <input
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
          />

          <CardTitle>
            <label htmlFor="name">Name:</label>
          </CardTitle>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <CardTitle>
            <label htmlFor="description">Description:</label>
          </CardTitle>
          <input
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />

          <CardTitle>
            <label htmlFor="recipe">Recipe:</label>
          </CardTitle>
          <input
            id="recipe"
            name="recipe"
            value={formData.recipe}
            onChange={handleChange}
          />

          <CardTitle>
            <label htmlFor="serve">How do you serve it?</label>
          </CardTitle>
          <input
            id="serve"
            name="serve"
            value={formData.serve}
            onChange={handleChange}
          />
          <Button className="mt-3" style={{ "display": "block" }}>
            Add your suggestion!
          </Button>
        </form>
      </CardBody>
    </Card>
  );
}
// end


export default SuggestionsForm;