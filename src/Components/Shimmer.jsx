import React from "react";
import Loader from "../utils/customizeLoader.gif";
import { SHIMMER_TODO_CARD_UNIT } from "../utils/constants";

const CardShimmer = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-img stroke animate"></div>
      <div className="shimmer-title stroke animate"></div>
      <div className="shimmer-tags stroke animate "></div>
      <div className="shimmer-details stroke animate "></div>
    </div>
  );
};

const ShimmerTodo = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-center">
        <div className="  w-[250px] m-[10px] ">
          <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
            <div className="p-4">
              <h2 className="bg-gray-400 animate-pulse h-3 w-2/4 m-2 "></h2>
              <h1 className="w-3/4  h-3 animate-pulse bg-gray-500 m-2"></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ShimmerTodoDetails = () => {
  return (
    <>
      <div className=" w-[250px] m-[10px] ">
        <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
          <div className="p-2">
            <h2 className="bg-gray-400 animate-pulse h-3 w-2/4 m-2 "></h2>{" "}
            <h2 className="bg-gray-400 animate-pulse h-3 w-2/4 m-2 "></h2>
            <h1 className="w-3/4  h-3 animate-pulse bg-gray-500 m-2"></h1>
          </div>
        </div>
      </div>
    </>
  );
};

const Shimmer = (type) => {
  console.log(type);
  return (
    <div className="flex flex-wrap justify-center">
      {/* create a new Array instance using Array() constructor and map through every element of array */}
      {Array(SHIMMER_TODO_CARD_UNIT).fill().map((element, i) => {
              return <ShimmerTodo  />;
            })}
    </div>
  );
};

export default Shimmer;
  /**
   * {type == "type"
        ? Array(SHIMMER_TODO_CARD_UNIT)
            .fill("")
            .map((element, index) => {
              return <ShimmerTodo key={index} />;
            })
        : Array(SHIMMER_TODO_DETAILS_CARD_UNIT)
            .fill("")
            .map((element, index) => {
              return <ShimmerTodoDetails key={index} />;
            })}
   */