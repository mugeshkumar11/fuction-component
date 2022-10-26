import { useState,useEffect } from "react"
function First(){
    useEffect(()=>{
        return ()=>{
            <div>First</div>
            console.log("first component will unmount");
        }
    },[]);
    return <div>First</div>;
}
function Main (){
    const [name,setName] = useState ("mugesh");
    const [age,setAge] = useState ("22");
    const [dept,setDept] = useState ("civil");
    const [show,setShow] = useState("true");

    useEffect(() =>{
        console.log("componentDidmount");
    },[name,dept]);

    return (
        <div>{name} {age} {dept}
        <button onClick={ () =>setName("simeon")}>updatename</button>
        <button onClick={() => setAge("21")}>updateage</button>
        <button onClick={() =>setDept("mech")}>updatedept</button>
        <button onClick={( ) => setShow(!show)}>Mukes</button>
        {show ? <First /> :null}
        </div>
       
    );
}


export default Main

