export default function TodoFooter ({todos, clearCompleted, changeListType}) {

    const isCompleted = todos.filter(item => item.isCompleted === false).length

    const onClickHandler = (type) => {
        changeListType(type)
    }


    return (
        <div className="footer">
            <span>{isCompleted} items left</span>
            <button onClick={() => onClickHandler('All')}>Բոլորը</button>
            <button onClick={() => onClickHandler('Active')}>Ընթացքում</button>
            <button onClick={() => onClickHandler('Completed')}>Կատարվածներ</button>
            <button onClick={() => {
                clearCompleted()
            }}>Մաքրել Կատարվածները</button>
        </div>
    )
}