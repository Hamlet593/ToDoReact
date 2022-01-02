export default function TodoFooter ({todos, clearCompleted, changeListType}) {

    const isCompleted = todos.filter(item => item.isCompleted === false).length

    const onClickHandler = (type) => {
        changeListType(type)
    }


    return (
        <div className="footer">
            <span>{isCompleted} items left</span>
            <button onClick={() => onClickHandler('All')}>All</button>
            <button onClick={() => onClickHandler('Active')}>Active</button>
            <button onClick={() => onClickHandler('Completed')}>Completed</button>
            <button onClick={() => {
                clearCompleted()
            }}>Clear Completed</button>
        </div>
    )
}