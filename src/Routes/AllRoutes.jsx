import { Route, Switch } from "react-router-dom";
import AddCity from "../Pages/AddCity";
import Home from "../Pages/Home";

export default function AllRoutes(){

    return (
        <>
         <Switch>
             <Route exact path="/">
                 <Home />
             </Route>
             <Route exact path="/add-city">
                 <AddCity />
             </Route>
         </Switch>
        </>
    )
}