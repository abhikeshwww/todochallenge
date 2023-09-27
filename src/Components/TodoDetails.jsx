import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TODO_ITEM_DETAILS_API, USER_DETAILS_API } from '../utils/constants';
import TodoDetailsCard from './TodoDetailsCard';

const TodoDetails = () => {
  const { todoId } = useParams();
  const [todoItemDetails, setTodoItemDetails] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    getTodoItemDetails();
  }, []);
  useEffect(() => {
    getUserDetails();
  }, [todoItemDetails]);
  const getTodoItemDetails = async () => {
    const data = await fetch(TODO_ITEM_DETAILS_API + todoId);
    const json = await data.json();
    setTodoItemDetails(json);
    console.log(json);
  };
  const getUserDetails = async () => {
    const data = await fetch(USER_DETAILS_API + todoItemDetails?.userId);
    const json = await data.json();
    setUserDetails(json);
    console.log(json);
  };

  return (
    <div>
      <TodoDetailsCard
        username={userDetails.username}
        id={todoItemDetails.id}
        title={todoItemDetails.title}
        completed={todoItemDetails.completed}></TodoDetailsCard>
    </div>
  );
};

export default TodoDetails;
