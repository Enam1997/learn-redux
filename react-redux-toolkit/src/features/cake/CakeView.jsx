import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const numOfCake = useSelector((state) => state.cake.numOfCake);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cake: {numOfCake}</h2>
      <button onClick={() => dispatch(ordered())}>Ordered Cake</button>
      <button onClick={() => dispatch(restocked(5))}>Resored Cake</button>
    </div>
  );
};

export default CakeView;
