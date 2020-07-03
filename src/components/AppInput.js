import React, { useState } from 'react';

function AppInput() {
    let [state, setState] = useState({
        texto: "banana",
        texto_2: "uva"
    })

    let handleInput = event => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        });
    }

    return (
        <div style={{width: "100px", marginLeft: "10px"}}>
        <input value={state.texto} name="texto" onChange={handleInput} />
        <input value={state.texto_2} name="texto_2" onChange={handleInput} />
        <h1>1: {state.texto}</h1>
        <h1>2: {state.texto_2}</h1>
        </div>
    )
}

export default AppInput;