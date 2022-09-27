//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import './component/counter.css';

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

const Pagina = () => {
    //here you have to return expected html using the properties being passed to the component
    return (
        <>
     <SecondsCounter segundos={0}/>
        </>
        
    );
};



ReactDOM.render(<Pagina/>, document.querySelector("body"));

//render your react application

