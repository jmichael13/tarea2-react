export const getEstadoPersonaje = async (page)=>{
    const response = await fetch (`https://rickandmortyapi.com/api/character/?page=${page}`)
    const data = await response.json()
    return data
}