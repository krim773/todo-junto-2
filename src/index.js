import React from "react";
import ReactDOM from "react-dom/client";
import {PersonCard} from "./PersonCard";

const root = ReactDOM.createRoot(document.getElementById("root"));



root.render(
    <>
        <PersonCard firstName="Doe" lastName="Jane" age="45" hairColor="Black"/>
        <PersonCard firstName="Smith" lastName="John" age="88" hairColor="Brown"/>
        <PersonCard firstName="Fillmore" lastName="Millard" age="50" hairColor="Brown"/>
        <PersonCard firstName="Smith" lastName="Maria" age="62" hairColor="Brown"/>
    </>
);




