import { useState } from "react"

export default function TodoAdd({onAdd, changeAll}){
    
    const [text, setText] = useState('')
    
    return (
        <form className="form">
            <input type='checkbox' onChange={evt => {
                changeAll(evt.target.checked)
            }} />
            <input type='text' value={text} onChange={evt => {
                setText(evt.target.value.trim());
            }}/>
            <button onClick={evt => {
                evt.preventDefault();
                onAdd(text)
                setText('')
            }}>Add Todo</button>
        </form>
    )
}