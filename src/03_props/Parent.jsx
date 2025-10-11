import React from "react";
import Child2 from "./Child2";

const Parent = () => {
    let str = "hello child";
    let arr = [10, 30, 40, 50];
    let obj = {
        fname: "ashu",
        lname: "tiwari",
    };

    function getDataFromChild(val) {
        console.log("hii");
    }

    return <>
    <Child2 dbData ={{str,arr,obj,getDataFromChild}}/>

    </>;
};

export default Parent;
