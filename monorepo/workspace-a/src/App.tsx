import React from "react";
import Counter from "../../common/Counter"
import { StyledComponent } from "./component/StyledComponent";

const App = () =>{
    return (
        <div>
        <h1>
            Hello world! I am using React
            <Counter />
        </h1>

            <StyledComponent />
    </div>
    )
}

export default App