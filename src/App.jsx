import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Note from "./components/Note"
import notes from "./notes"

function App() {
    return <div><Header />
        {notes.map((info) =>
            <Note key={info.id} content={info.content} title={info.title} />)
        }
        <Footer /></div>
}

export default App;