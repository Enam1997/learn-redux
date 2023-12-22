import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";

const IcecreamView = () => {
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream);

  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Icecream: {numOfIcecream}</h2>
      <button onClick={() => dispatch(ordered())}>Ordered Icecream</button>
      <button onClick={()=> dispatch(restocked(5)) }>Resored Icecream</button>
    </div>
  );
};

export default IcecreamView;
