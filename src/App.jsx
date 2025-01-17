
import { useState, useEffect } from "react";
// import Button from './components/Button/Button'
import InputTodo from './components/InputTodo'
import TodoList from './components/TodoList'
import UnderBlock from "./components/UnderBlock";
// import InputSearch from './components/InputSearch'
import "./App.css";

const App = () => {
  let storedItems;
if(localStorage.getItem('todos')){
    if(JSON.parse(localStorage.getItem('todos')).length === 0) {
    storedItems = [{id: 1, title: '22500 квартира', completed: false},
            {id: 2, title: '5000 бензин', completed: false},
            {id: 3, title: '4600 кредит', completed: false},
          {id: 4, title: '22000 продукты', completed: false},
            {id: 5, title: '2000 обслуживание машины', completed: false},
          {id: 6, title: '2000 заказать/сходить', completed: false},
            {id: 7, title: '5000 коммуналка', completed: false},
          {id: 8, title: '1000 страховка машины', completed: false},
            {id: 9, title: '2500 подарки на нг', completed: false},
          {id: 10, title: '1000 лазер', completed: false},
            {id:11, title: '4000 ногти + ресницы', completed: false},
          {id: 12, title: '1500 гигиена', completed: false},
            {id: 13, title: '5000 непредвиденные расходы', completed: false},
          {id: 14, title: '3300 абонемент Дашуня', completed: false},
            {id: 15, title: '500 стрижка', completed: false},
          {id: 16, title: '500 тариф', completed: false},
            {id: 17, title: '3000 аванс Дашуня', completed: false},
          {id: 18, title: '3000 аванс Даня', completed: false},
            {id: 19, title: ' 3000 зп Дашуня', completed: false},
          {id: 20, title: ' 3000 зп Даня', completed: false},
            ]
    }else {
       storedItems = JSON.parse(localStorage.getItem('todos'))
    }
}
 
 const [todos, setTodos] = useState(storedItems)
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    console.log(todos)
  }, [todos])

 
       
  
  const [searchValue, setSearchValue] = useState('') 
  const [value, setValue] = useState("")
 

 const searchFilter = todos.filter((item) => {
     return item.title.toLowerCase().includes(searchValue.toLowerCase())
    })

  return (
    <>
    <div className="App">
      <h1>todos</h1>
      
     <InputTodo value={value} setValue={setValue} list={todos} setList={setTodos}  />
     
      <input className="search" type="text" value={searchValue} placeholder="Поиск..." 
        onChange={(e) => {
            setSearchValue(e.target.value)
      }}/>
     {/* <InputSearch list={todos} value={searchValue} setValue={setSearchValue} /> */}

     <TodoList  list={todos} setList={setTodos} searchFilter={searchFilter}/>
     
    </div>
    <UnderBlock list={todos}/>
    </>
  );
};

export default App;

