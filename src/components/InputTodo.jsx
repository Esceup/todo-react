import Button from "./Button/Button"

export default function InputTodo({ value, setValue, list, setList }) {
      function addTask() {
            if( value !== ''){
                    let id = Date.now();
                    setList([...list, {id: id, title: value, completed: false}])
                    setValue('')
                    
                
           
            }
        }

    return (
        <div>
            <div>
                <input className="inputValue" type="text" value={value} placeholder="Записать..." 
                onChange={(e) => {
                    setValue(e.target.value)
                }}/>
                
                <Button onClick={addTask}><i className="fa-solid fa-pencil"></i></Button>
            </div>
            
        </div>
        
    )
}

