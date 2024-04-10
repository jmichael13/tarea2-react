import { useEffect, useState } from "react"
import { getEstadoPersonaje } from "../actions/api.personajes"
import { ModalCharacter } from "./ModalCharacter"


export const CardPersonaje = (props) => {

    const { page } = props

    const [personaje, setPersonaje] = useState([])

    useEffect(() => {
        getEstadoPersonaje(page).then(res => setPersonaje(res.results))
    }, [page])

    
    return (
        <div className="row">
           
            {
                personaje.map((character) => (
                    <div key={character.id} className="col-12 col-sm-6 col-md-4 col-lg-3 text-center p-3 border ">
                        <img src={character.image} />
                    
                        <ModalCharacter image={character.image} id={character.id} name={character.name} location={character.location.name} species={character.species} status={character.status}/>
                    </div>
                ))

            } 
        </div>

    )
}