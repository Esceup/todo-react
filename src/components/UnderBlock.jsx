// import { useState } from "react";

import { useState, useEffect } from "react"

export default function UnderBlock({ list }) {

let zpCount = JSON.parse(localStorage.getItem('zpCount'))
const [zp, setZp] = useState(zpCount)


let sum = list.reduce((acc, curr) => Number(acc) + Number(curr.title.substr(0, 5).replace(/[^.\d]+/g, "").replace(/^([^\.]*\.)|\./g, "$1")), 0)
//    let sum = trati;
// for(let i = 0; i < list.length; i++){
//     sum += 
// }
let ostatok = zp - sum
const zpClick = () => {
    let res = prompt('Сколько?', 130000)
    setZp(res)
}
 useEffect(() => {
    localStorage.setItem('zpCount', JSON.stringify(zp))
    console.log(zp)
  }, [zp])


        
        
    
    return (
        <div className="down-menu">
             <div className="w-100 d-flex j-c-b">
                <span className="Zatrati">Затраты: {sum} рублей</span>
                <button className="Zarplata" onClick={zpClick}>Зарплата: {zp}</button>
             </div>
             <span className="Kopilka">В копилку: {ostatok} рублей</span>
         </div>
    )
}