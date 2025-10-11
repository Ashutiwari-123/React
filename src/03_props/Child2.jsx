 import React from 'react'

 const Child2 = (props) => {

    let {str,arr,obj,getDataFromChild} = props.dbData;
   return (
     <div>
     <h1> i am child 2</h1>
     <h2> String is :{str}</h2>
     <h2> Object is : {obj.fname} {obj.lname}</h2>
     <button onClick={()=>getDataFromChild("hii")}>send data </button>
     </div>
   )
 }

 export default Child2;
