import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  /**Pulls all snacks from database. 
   * Output: array of all snack objects
   * [
       {
          "id": "nachos",
          "name": "Nachos",
          "description": "An American classic!",
          "recipe": "Cover expensive, organic tortilla chips with Cheez Whiz.",
          "serve": "Serve in a hand-thrown ceramic bowl, garnished with canned black olives"
        },...
      ] */
  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  /**Pulls all drinks from database. 
   * Output: array of all drink objects.
   * [
     {
        "id": "martini",
        "name": "Martini",
        "description": "An ice-cold, refreshing classic.",
        "recipe": "Mix 3 parts vodka & 1 part dry vermouth.",
        "serve": "Serve very cold, straight up."
      },...
    ] */
  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  /**Adds drink suggestion to database.
   * Input: 
    {
      "id": "martini",
      "name": "Martini",
      "description": "An ice-cold, refreshing classic.",
      "recipe": "Mix 3 parts vodka & 1 part dry vermouth.",
      "serve": "Serve very cold, straight up."
    }
   * Output: "drinkName" */
  static async addDrink(drinkSuggestion) {
    const result = await axios.post(`${BASE_API_URL}/drinks`, drinkSuggestion);
    return result.data.name;
  }

  /**Adds snack suggestion to database.
   * Input: 
      {
        "id": "nachos",
        "name": "Nachos",
        "description": "An American classic!",
        "recipe": "Cover expensive, organic tortilla chips with Cheez Whiz.",
        "serve": "Serve in a hand-thrown ceramic bowl, garnished with canned black olives"
      }
  * Output: "snackName" */
  static async addSnack(snackSuggestion) {
    const result = await axios.post(`${BASE_API_URL}/snacks`, snackSuggestion);
    return result.data.name;
  }

}

export default SnackOrBoozeApi;
