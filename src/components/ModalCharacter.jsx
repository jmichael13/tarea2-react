import { useState } from "react"
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'



export const ModalCharacter = (props) => {

    const { image, id, name, location, species, status } = props

    const [open, setOpen] = useState(false);

    const handleShow = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }


    return (
        <div>
            <br></br>
            <button onClick={handleShow} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Detalles
            </button>

             <Modal show={open} onHide={handleClose} >
                <Modal.Header closeButton>
                    <Modal.Title><h1 style={{color:"blue"}}>{name}</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <div style={{textAlign:"center"}}> <img src={image} /></div>
                    <br></br>
                    <p><b>ID:</b> {id}</p>
                    <p><b>UBICACIÓN: </b>{location}</p>
                    <p><b>ESPECIE: </b>{species}</p>
                    <p><b>ESTADO: </b>{status}</p>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    
                </Modal.Footer>
            </Modal> 

        </div>
    )
}