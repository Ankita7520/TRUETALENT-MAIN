import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import LoginForm from "./Form";




const App=()=>{
    return(
    <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginForm></LoginForm>}></Route>
        </Routes>
       </BrowserRouter>
{/*       
         <Flask></Flask> */}
         
    </div>
    )
}


export default App