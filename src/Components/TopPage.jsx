import React, { useEffect, useState } from "react";
import Card from "./Card";
// a top page (route: '/') for displaying/searching a list of TODO items
//## Top page requirements
/**the page should display the list of todo items fetched from the https://jsonplaceholder.typicode.com/todos API (visit the URL to see the data format)
- items should be displayed in a grid, with each card having 250px width, and 20px between the cards. Those sizes are fixed for all screen sizes.
- Design should be responsive to be useable on various screen sizes, down to mobile phone.
- card background should be 'green' for items which are completed, and 'crimson' for items which are not completed
- each card should show the todo item number, and the first 20 characters of the item title
- the top of the page should have an search input field. When text in input inside it, only items which have a title containing the search text should be be displayed. When nothing is input in the field the whole list of items is displayed.
- clicking on a todo item's card should go to the todo item details page for that item
  
Example:
![screenshot](https://cdn.glitch.com/69d5f470-9f1e-492f-a706-2218599bf06d%2FScreen%20Shot%202021-06-14%20at%2011.28.49.png?v=1623637831386)
 */
const TopPage = () => {
  const [todoItems, setTodoItems] = useState([]);
  const [searchedItems, setSearchedItems] = useState([])
  const [searchResult, setSearchResult] = useState([])
  useEffect(() => {
    getTodoItems();
  }, []);

  const updateSearchResults = (inputString)=>{
  let data = todoItems.find(item=>item.title.contains())
  }

  const getTodoItems = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    const json = await data.json();
    console.log(json[0]);
    setTodoItems(json);
    setSearchedItems(json)
  };

  return (
    <div>
      <div>
        <h1>
        </h1>
        <input type="text" onChange={updateSearchResults}></input>
      </div>
      <div className="flex flex-wrap">
        {todoItems.map((searchedItems) => (
          <Card todo={searchedItems}></Card>
        ))}
      </div>
    </div>
  );
};

export default TopPage;
