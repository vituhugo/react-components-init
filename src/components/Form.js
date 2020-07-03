import React, { useState } from 'react';

function Form() {
    let [form, setForm] = useState({
        text: "TEXTO",
        select: 2,
        textarea: "TEXTO LONGO",
        checkbox: false,
        radio: "FALSE",
    })

    function handleInput(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    function handleChecked(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        let dados = form;
        setForm({
            text: "TEXTO",
            select: 2,
            textarea: "TEXTO LONGO",
            checkbox: false,
            radio: "FALSE", 
        });

        // Enviar os dados via ajax, ou gravar no localStorage
        // fetch("/api/gravar-dados", dados).then(data => data.json()).then(dados => alert("Dados gravados!"));
        alert("Dados GRAVADOS!");
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1>{form.text}</h1>
            <input name="text" value={form.text} onChange={handleInput} />

            <h1>{form.select}</h1>
            <select name="select" value={form.select} onChange={handleInput}>
                <option value={1}>Option 1</option>
                <option value={2}>Option 2</option>
                <option value={3}>Option 3</option>
            </select>

            <h1>{form.textarea}</h1>
            <textarea 
                name="textarea" 
                value={form.textarea} 
                onChange={handleInput} />

            <h1>{form.checkbox }</h1>
            <input name="checkbox" type="checkbox" onChange={handleChecked} />

            <h1>{form.radio}</h1>
            <input name="radio" type="radio" value="OLÁ" onChange={handleInput} />Ola
            <input name="radio" type="radio" value="OI" onChange={handleInput} />Oi
            <br />
            <button>SALVAR</button>
        </form>
    )
}

export default Form;