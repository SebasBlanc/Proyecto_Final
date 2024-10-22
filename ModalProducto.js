import React, { useEffect, useState } from 'react';

import {
    Button, Modal, ModalHeader, ModalBody, 
    ModalFooter, Form, FormGroup, Label, Input 
} from 'reactstrap';

import axios from 'axios';


const ModalProducto = ( {isOpen, toggleModal, onProductoInsert, isEditar, productoEditar}) => {
    const [ nombre, setNombre] = useState('');
    const [ estado, setEstado] = useState('');
    const [ fecha, setFecha] = useState('');
    const [ id, setId] = useState('');


    useEffect ( ()=>{

        if(productoEditar){
            setEstado(productoEditar.estado);
            setNombre(productoEditar.nombre);
            setFecha(productoEditar.fecha);
            setId(productoEditar.id);
        }else{
            setFecha('');
            setEstado('');
            setNombre('');
            setId('');
        }


    }, [productoEditar]);


    const cleanData = () =>{
        setFecha('');
        setEstado('');
        setNombre('');
        setId('');
    }


    const handleSubmit = async () => {   

        try {
            const response = await axios.post('https://paginas-web-cr.com/Api/apis/InsertarCursos.php', 
                {
                    nombre,
                    estado,
                    fecha
                }
            );
            console.log('Respuesta', response.data);
            onProductoInsert();
            cleanData();
            toggleModal();
        } catch (error) {
            console.error('Error en el API', error);
        }
    }


    return ( 

        <Modal isOpen={isOpen} toggle={toggleModal} >
        <ModalHeader toogle={toggleModal} > 
            {
                isEditar ? 'Editar ' : 'Insertar '
            }            
             Producto</ModalHeader>
        <ModalBody>
        <Label>Nombre</Label>
            <Input type="text" id="nombre" value={nombre} onChange={(e)=> setNombre(e.target.value)}></Input>
            <Label>Estado</Label>
            <Input type="text" id="estado" value={estado} onChange={(e)=> setEstado(e.target.value)}></Input>
            <Label>Fecha</Label>
            <Input type="date" id="fecha" value={fecha} onChange={(e)=> fecha(e.target.value)}></Input>
            <Label>Usuario</Label>                                                                                                                                                                     

        </ModalBody>
        <ModalFooter>
        <Button color='success' onClick={handleSubmit}>
            Guardar
        </Button>
        <Button color='danger' onClick={toggleModal}>
            Cerrar
        </Button>


        </ModalFooter>
    </Modal>
        


     );
}

export default ModalProducto;