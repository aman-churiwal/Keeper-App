import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes"

/*
let createNote = (noteItem) => {
    return (
        <Note 
        key={noteItem.key}
        title={noteItem.title}
        content={noteItem.content}
        />
    )
}
*/

let App = () => {
    return (
        <div>
            <Header />
            {notes.map((noteItem) => {
                return (
                    <Note 
                    key={noteItem.key}
                    title={noteItem.title}
                    content={noteItem.content}
                    />
                )
            })}
            <Footer />
        </div>
    )
}

export default App;
