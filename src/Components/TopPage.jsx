import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import { TODO_ITEMS_API } from '../utils/constants';
import Shimmer from './Shimmer';
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
  const [searchText, setSearchText] = useState([]);
  const [searchedItems, setSearchedItems] = useState([]);
  useEffect(() => {
    getTodoItems();
  }, []);

  useEffect(() => {
    getSearchItems(searchText, todoItems);
  }, [searchText]);

  const getTodoItems = async () => {
    const data = await fetch(TODO_ITEMS_API);
    const json = await data.json();
   
    setTodoItems(json);
  };

  const getSearchItems = (searchText, todoItems) => {
    if (searchText != '') {
      const data = todoItems.filter((todo) =>
        todo?.title.toLowerCase().includes(searchText.toLowerCase())
      );
      data.length === '0' ? '' : setSearchedItems(data);
      console.log(searchedItems[0]);
    } else setSearchedItems(todoItems);
  };

  return (
    <div className='
    w-[100vw]'> 
      <div>
        <h1></h1>
        <div className="flex justify-center flex-col items-center">
          <h1>*Search by Title includes*</h1>
          <input
            className="border rounded-lg p-2"
            placeholder="Search a todo item..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            type="text"></input>
        </div>
      </div>
      {todoItems.length=='0'?<Shimmer type={"todo"} ></Shimmer>:   <div className="flex flex-wrap justify-center">
        {searchText == ''
          ? todoItems.map((todo) => (
              <Link to={'/todo/' + todo?.id} key={todo?.id}>
                <Card todo={todo}></Card>
              </Link>
            ))
          : searchedItems?.map((todo) => (
              <Link to={'/todo/' + todo?.id} key={todo?.id}>
                <Card todo={todo}></Card>
              </Link>
            ))}
      </div>}

    </div>
  );
};

export default TopPage;
