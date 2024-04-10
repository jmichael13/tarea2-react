
export const NavPage = (props) => {

    const { page, setPage } = props

    const sgtPage = () => {
        setPage(page + 1)
    }

    const prvPage = () => {
        setPage(page - 1)
    }

    return (
            <header className="d-flex justify-content-between p-3 bg-secondary text-white">
                <button onClick={() => prvPage()}>Anterior</button>
                <h2><u>PÁGINA: {page}</u></h2>
                <button onClick={() => sgtPage()} >Siguiente</button>

            </header>

    )
}