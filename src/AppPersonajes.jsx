import { useState } from "react"
import { CardPersonaje,  NavPage } from "./components"


export const AppPersonajes = () => {

    const [pages, setPages] = useState(1)

  
    return (
        <div className="container">
            <h1 className="text-center display-1 py-4">Rick and Morty</h1>

            <NavPage page={pages} setPage={setPages}/>

            <CardPersonaje page={pages}/>

            <NavPage page={pages} setPage={setPages}/>

        </div>
    )
}