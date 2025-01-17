
import Button from "./Button/Button"

// import InputSearch from "./InputSearch";
export default function TodoList({ list, setList, searchFilter }) {
 

  

  const deleteTask = (item) => {
    const newTodos = list.filter((id) => {
      return id !== item;
    })
    setList(newTodos)
  }

   const completeTodo = (item) => {
   const newTodos = list.filter((id) => {
      return id !== item;
    })
    setList([...newTodos, {id: item.id, title: item.title, completed: !item.completed}])
    
  }

 const editTask = (item) => {
   let newItem = prompt('Редактировать')
   const newTodos = list.filter((id) => {
      return id !== item;
    })
    setList([...newTodos, {id: item.id, title: newItem, completed: item.completed}])
    
  }

  const all = () => {
    setList()
  }

   const deleteAllTask = () => {
    setList([])
  
  }

    return (
      // <Button onClick={deleteAllTask}>Удалить всё</Button>
      <>
      <Button onClick={() => all()}>All</Button>
            {list?.length > 0 ? 
            
            (<ul>
                  {searchFilter.sort((a, b) => a.completed < b.completed ? 1 : -1).map((name) => 
                      <div key={name.id} className="listItem" style={{ background:
                       name.completed ? '#cfffcf' : 'inherit'}}>
                      <li onClick={() => completeTodo(name)} style={{
                          textDecoration: name.completed
                            ? "line-through"
                            : "none",
                        }}>{name.title}</li>
                       <Button className="editButton" 
                      onClick={() =>
                        editTask(name)
                      }>
                      <i className="fa-solid fa-pencil"></i>
                      </Button>
                      <Button className="delete-button" 
                      onClick={() =>
                        deleteTask(name)
                      }>
                      <i className="fa-solid fa-trash-can"></i>
                      </Button>
                  </div>
                  )}
              </ul>) : (<p>Список пустой</p>)}

              {list.length > 0 ? <Button className='button deleteAll' onClick={deleteAllTask}>Удалить всё</Button> : null}
             
      </>
        

      
       
    )
}