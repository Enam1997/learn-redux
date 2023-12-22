import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserView from "./features/user/UserView";
import IcecreamView from "./features/icecream/IcecreamView";
import CakeView from "./features/cake/CakeView";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CakeView />
      <IcecreamView />
      <UserView />
    </>
  );
}

export default App;
