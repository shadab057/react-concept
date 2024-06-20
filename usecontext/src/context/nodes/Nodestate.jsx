import React from "react";
import noteContext from "./Nodecontext";


const NoteState = (props)=>{

const state = (props)= {
    "name":"shadab",
    "class": "5b"

}
    return (
        <noteContext.Provider value={state}>

{props.children}
        </noteContext.Provider>
    )
}

export default  NoteState;