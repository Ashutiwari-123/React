import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parent from "./03_props/Parent";
import Parent1 from "./06_childreanProps/Parent1";
import ParentA1 from "./07_context2/ParentA1";
import LifeCycleInFBC from "./lifecycle/LifeCycleinFBC";
import FetchUsers from "./APICALL/FetchUsers";
import ComponentA from "./component/ComponentA";
import ComponentB from "./component/ComponentB";
import ComponentC from "./component/ComponentC";
function App() {
  // const [count, setCount] = useState(0);
  const option ='c';
  let content = <h1> hello how are you</h1>;

  if (option === "a") {
    content = <ComponentA />;
  } else if (option === "b") {
    content = <ComponentB />;
  } else if (option === "c") {
    content = <ComponentC />;
  } else {
    content = <h1>other component</h1>;
  }

  return (
    <>
      {/* <Parent/> */}
      {/* <Parent1/> */}
      {/* <ParentA1/> */}
      {/* <ParentA1/> */}
      {/* <LifeCycleInFBC/> */}
      {/* <FetchUsers/> */}

      {/* <ComponentA/>
   <ComponentB/>
   <ComponentC/> */}
      <div>{content}</div>
    </>
  );
}

export default App;
