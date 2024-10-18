import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0);

    const handleAdd = () =>{

        const  newCount = count + 1 ;
        setCount(newCount)
    }
    const handleReduce = () => {
        const  newCount = count - 1 ;
        setCount(newCount)
    }

    return (
        <div style={{border:'2px solid yellow'}}>
            <h2>counter:{count}</h2>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>reduce</button>



        </div>
    )
}