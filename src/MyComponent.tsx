import React,{useState} from "react";

function MyComponent(){

   const [name,setName] = useState();
    const 
   return(
    <div>
        <p>
           Name : {} 
        </p>
        <button onClick={updateName}>Set Name</button>
    </div>
   )
}

export default MyComponent