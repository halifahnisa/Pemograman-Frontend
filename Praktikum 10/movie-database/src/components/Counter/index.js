import { useEffect } from "react";
import { useState } from "react";

function Counter() {
    
    // usestate mengembalikan sepasang value dalam bentuk array
    const [angka, setAngka] = useState(0); 

    function addAngka() {
        setAngka(angka + 1);
    }
    function updateDom(){
        console.log ("Lifecycle: Dimount");
        //melakukan side effect: mengakses DOM
        document.title = `Hasil: ${angka}`;
    }

    //useEffect 
    useEffect(updateDom, [angka]);
    console.log ("Lifecycle: Dirender");

    return (
       <div>
        <p>Hasil : {angka}</p>
        <button onClick={addAngka}>add</button>
       </div> 
    )
}
export default Counter;