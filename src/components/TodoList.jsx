import TodoItem from "./TodoItem";

export default function TodoList({todos, onDelete, onChange, changeInputValue, listType}) {
    
    let localTodos = [...todos];

    if(listType === 'Active') {
        localTodos = localTodos.filter(item => !item.isCompleted);
    }

    if(listType === 'Completed') {
        localTodos = localTodos.filter(item => item.isCompleted);
    } 

    return (
        <div>
            {localTodos.map(todo => {
                return (
                <div key={todo.id} className="item">
                    <TodoItem 
                        todo={todo} 
                        onDelete={onDelete} 
                        onChange={onChange}
                        changeInputValue={changeInputValue} 
                    />
                </div>
                )
            })}
        </div>
    )
}