import React from "react";
import "./App.css";
import logo1 from "./whitevan-logo.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="bg">
                <div className="logo">

                    <img src = {logo1} className = "logo"></img>
                </div>
                <div className = "title">White Van LLC.</div>
            </header>
            <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea modi inventore itaque quisquam eius adipisci, facere sint blanditiis? Minima, quasi temporibus recusandae sapiente quae facere in impedit nesciunt tenetur quidem hic delectus sunt ab dolores!
            </div>
            

        </div>
    );
}

export default App;
