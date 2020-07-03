import React, { useState } from 'react';

function AppExample() {
    let [state, setState] = useState("Banana");
    let [corFundo, setCorFundo] = useState("blue");
    
    let changeBackground = e => {
        corFundo === "blue" 
            ? setCorFundo("yellow") 
            : setCorFundo("blue");
    }

    return (
        <>
            <h1 style={{"background": corFundo}}>State: {state}</h1>
            <button onClick={changeBackground}>Mudar Fundo!</button>
        </>
    )
}

// function AppExample() {

//     function sayHello() {
//         alert('Hello Word');
//     }

//     return <button onClick={sayHello}>Say Hello!</button>
// }

export default AppExample;