
import {Link} from "react-router-dom";

export default function Navbar(){

    return (
        <div style={{display: "flex", gap: "2rem"}}>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/add-city">ADD CITY</Link>
            </div>
        </div>
    )
}