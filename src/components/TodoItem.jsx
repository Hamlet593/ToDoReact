import { useState } from "react";

export default function TodoItem ({todo, onDelete, onChange, changeInputValue}) {

    let [editMode, setEditMode] = useState(false);
    let [editedValue, setEditValue] = useState(todo.text);

    const deactivateEditMode = () => {
        setEditMode(false);
        changeInputValue(todo.id, editedValue);

    };

    const onValueChange = (event) => {
        setEditValue(event.target.value)
    }

    return (
        <div>
            <input type='checkbox' checked={todo.isCompleted} onChange={evt => {
                onChange({
                    ...todo,
                    isCompleted: evt.target.checked,
                    })
                }}
                />
                <span>
                    {!editMode &&
                        <span onDoubleClick={() => setEditMode(true)}>{editedValue || 'No value'}</span>
                    }
                    {editMode &&
                        <input onChange={onValueChange} autoFocus={true} onBlur={deactivateEditMode} value={editedValue}></input>
                    }
                </span>
                <button onClick={evt => {
                    evt.preventDefault();
                    onDelete(todo.id)
                }}>X</button>
        </div>
    )
}