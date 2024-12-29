import React from 'react'
import Form from 'react-bootstrap/Form';
const Contact = () => {
    return (
        <>
            <div className="contact-container">
                <h2>Contactame</h2>
                <Form className='form-contact' action="https://formspree.io/f/mnqkzvwj" method="POST">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="name" placeholder="Escribe tu nombre" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control type="email" placeholder="correo@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Déjame un mensaje</Form.Label>
                        <Form.Control as="textarea" rows={3} data-gramm="false"/>
                    </Form.Group>
                    <button>Enviar</button>
                </Form>
            </div>
        </>
    )
}

export default Contact