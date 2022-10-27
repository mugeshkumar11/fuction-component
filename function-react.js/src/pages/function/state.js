import { useState } from "react";

function Main (){
    const [name,setName] = useState ("mugesh");
    const [age,setAge] = useState ("22");
    const [dept,setDept] = useState ("civil");
    
    return (
        <div>{name} {age} {dept}
        <button onClick={ () =>setName("simeon")}>updatename</button>
        <button onClick={() => setAge("21")}>updateage</button>
        <button onClick={() =>setDept("mech")}>updatedept</button>
        </div>
    );
}

export default Main
