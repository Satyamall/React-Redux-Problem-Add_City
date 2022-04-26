import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCities, removeCity, toggleCity } from "../Redux/action";


export default function Home(){

    const dispatch = useDispatch();
    const getData=()=>{
         dispatch(getCities());
    }

    useEffect(()=>{
        getData();
    },[])

    const handleEdit=(id)=>{
        
    }
    const handleDelete=(id)=>{
        dispatch(removeCity(id))
    }

    const {cities,isLoading,isError}=useSelector(state=> state);
   
    if(isLoading){
        return <h1>Loading...............</h1>
    }
    return(
        <div>
            <h1>Home Page</h1>
            <div>
                <table>
                    <tr>
                       <th>ID</th>
                       <th>Country</th>
                       <th>City</th>
                       <th>Population</th>
                       <th>Edit</th>
                       <th>Delete</th>
                    </tr>
                       {
                           cities?.map((item)=>{
                               return <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.country}</td>
                                    <td>{item.city}</td>
                                    <td>{item.population}</td>
                                    <td>
                                        <button onClick={(id)=>handleEdit(id)}>EDIT</button>
                                    </td>
                                    <td>
                                        <button onClick={()=>handleDelete(item.id)}>DELETE</button>
                                    </td>
                               </tr>
                           })
                       }
                </table>
            </div>
        </div>
    )
}