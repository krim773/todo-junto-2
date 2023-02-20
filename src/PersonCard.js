import { useState } from "react";

   
export const  PersonCard = ({firstName, lastName, age, hairColor}) => {
const [counter, setCounter] = useState (0); 

const handleAdd = (event) => {
    setCounter (counter + 1);    
};
 

return (
    <div>
        <h2>{firstName},{lastName} </h2>
        <p>Age: {parseInt(age) + counter}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={ handleAdd }>
            feliz cumple
            </button>
    </div>
)    
}