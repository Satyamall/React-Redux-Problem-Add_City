import { useState } from "react";
import {useDispatch} from "react-redux";
import {addCity} from "../Redux/action";

export default function AddCity(){

    
    const [ city, setCity] = useState("");
    const [ country, setCountry] = useState("");
    const [ population, setPopulation] = useState("");

    const dispatch=useDispatch();
    const handleAdd=()=>{
        dispatch(addCity({city,country,population}));
    }

    return (
        <div style={{ marginTop: "20px"}}>
            <h1>Add City</h1>
            <div>
                <input type="text" placeholder="Type Country Name Here" value={country} onChange={(e)=>setCountry(e.target.value)} />
            </div>
            <div>
                <input type="text" placeholder="Type City Name Here" value={city} onChange={(e)=>setCity(e.target.value)} />
            </div>
            <div>
                <input type="text" placeholder="Type Population in Number Here" value={population} onChange={(e)=>setPopulation(e.target.value)} />
            </div>
            <div>
                <button onClick={handleAdd}>ADD</button>
            </div>
        </div>
    )
}