import React from 'react';

const Card = ({ todo }) => {
  const { id, title, completed } = todo;
  return (
    <div
      className={` hover:shadow-2xl duration-100 hover:border-0 flex flex-col align-middle items-center p-4 border-2 border-gray-200 rounded-lg w-[250px] m-[10px] ${completed ? 'bg-green-500' : 'bg-red-500'}`}>
      <h1 className="">#{id}</h1>
      <p className=" max-w-[20ch] truncate">{title}</p>
    </div>
  );
};

export default Card;
