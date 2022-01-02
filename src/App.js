import './App.css';
import { useState } from 'react';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';
import { useEffect } from 'react/cjs/react.development';

function App() {
  const [listType, setListType] = useState('All')
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const state = localStorage.getItem('TodoList');
    console.log(state)
    if(state) {
      setTodos(JSON.parse(state))
    }
  }, [])

  useEffect(() => {
    return localStorage.setItem('TodoList', JSON.stringify(todos))
  }, [todos])


  const onAdd = newTodo => {
    setTodos([
        ...todos,
        {
          id: Math.random(),
          text: newTodo,
          isCompleted: false,
        },
    ])
  }

  const onDelete = deletedId => {
    setTodos(todos.filter(item => item.id !== deletedId));
  }

  const onChange = changedTodo => {
    setTodos(todos.map(item => {
      if(item.id === changedTodo.id){
        return changedTodo
      }
      else {
        return item
      }
    }));
  }

  const changeAll = value => {
    setTodos(todos.map(item => {
      return {
        id: Math.random(),
        text: item.text,
        isCompleted: value,
      }
    }));
  }

  const clearCompleted = () => {
    setTodos(todos.filter(item => !item.isCompleted));
  }


  const changeInputValue = (id, value) => {
    const changedState = [...todos];
    changedState.map(item => item.id === id ? item.text = value : null);
    setTodos(changedState);
  }


  const changeListType = (type) => {
    setListType(type)
  }

  return (
    <div className='App'>
      <TodoAdd 
        onAdd={onAdd} 
        changeAll={changeAll}
      />
      <TodoList 
        todos={todos} 
        onDelete={onDelete} 
        onChange={onChange} 
        changeInputValue={changeInputValue}
        listType={listType}
      />
      <TodoFooter 
        todos={todos} 
        clearCompleted={clearCompleted} 
        changeListType={changeListType}
      />
    </div>
  )
}

export default App;
