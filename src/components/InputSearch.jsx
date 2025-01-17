

export default function InputSearch({ list, value, setValue }) {

    

    const searchFilter = list.filter((item) => {
     return item.title.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <div>
           
            <input type="text" className="search" value={value} onChange={(event) => {
                setValue(event.target.value)
            }}/>
            
        </div>
    )
}