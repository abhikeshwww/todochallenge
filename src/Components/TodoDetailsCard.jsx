import React from 'react';
import Footer from './Footer';

const TodoDetailsCard = ({username, id, title , completed}) => {
  return (
    
<div className="cursor-pointer  group perspective flex justify-center top-[50%]">
  <div className={`relative border rounded-xl preserve-3d  group-hover:my-rotate-y-180 w-[250px] h-60 duration-700 ${completed ? 'bg-green-200' : 'bg-red-200'} bg-opacity-40`} >
    <div className="absolute  backface-hidden w-full h-full text-xl">
  <p><b>Item Number: </b>{id}</p>
  <p><b>Creator: </b>{username}</p>
  <p><b>Title: </b>{title}</p>
    </div>
    <div className="absolute  my-rotate-y-180 backface-hidden w-full h-full overflow-hidden" >
     <p>
     </p>
    </div>
  </div>
</div>
  );
};

export default TodoDetailsCard;
