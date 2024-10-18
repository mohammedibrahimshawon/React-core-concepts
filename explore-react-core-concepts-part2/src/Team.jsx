import { useState } from "react"

export default function Team(){
    const[team,setTeam] = useState(11);

    const teamStyle = {
        border: '2px solid purple',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
    }
    const handleAdd =() =>{
        const newteam = team + 1;
        setTeam(newteam);


    }

    const handleRemove =() =>{
        const newteam = team -1;
        setTeam(newteam);


    }


    return (
        <div style={teamStyle}>
            <h2>players:{team}</h2>
            <button onClick={handleAdd} >ADD</button>
            <button onClick={handleRemove}>remove</button>
        </div>
    )
}
