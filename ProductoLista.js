import React, { useEffect, useState } from 'react';
import {
        Button, Modal, ModalHeader, ModalBody, 
        ModalFooter, Form, FormGroup, Label, Input 
    } from 'reactstrap';

import ModalProducto from './ModalProducto';

const ProductoLista = () => {

    const [productos, setProductos] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [ productoEditar, setProductoEditar] = useState(null);
    const [ isEditar, setIsEditar] = useState(false);


    useEffect(() =>{
        fetchProductos();
    }, []);

    

    //Declarar funciones.
    const fetchProductos = () =>{

        fetch( 'Link de la api' )
        .then(respuesta=>respuesta.json())
        .then( (datosrepuesta) => {
            setProductos(datosrepuesta.data);
        })
        .catch(
            error=>{
                console.error('Error al cargar:' , error);
            }
        );
    };


    const toggleEditModal = (producto) =>{
        setProductoEditar(producto);

        if(producto){
            setIsEditar(true);
        }else{
            setIsEditar(false);
        }

        setModalOpen(true);
    };



    const guardar = async ()=>{
        // similar al fect
    }


    const toggleModal =() =>{

        setModalOpen(!modalOpen);
    }


    return ( 

        <div className='container'>

<br></br><br></br><br></br>


            <Button color='primary' onClick={() => toggleEditModal(null)}>
                Agregar Producto
            </Button>

                <table
                                className="table table-info"
                            >
                               
                                <thead>
                                    <tr>
                                        <th scope="col">Acciones</th>
                                        <th scope="col">Id</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Fecha</th>
                                        <th scope="col">Acciones</th>
                                        
                                    </tr>
                                </thead>
                                <tbody id="datos">
                                    {
                                        productos.map( producto => (
                                                <tr key={producto.id}>
                                                    <td>Botones</td>
                                                    <td>{producto.id}</td>
                                                    <td>{producto.nombre}</td>
                                                    <td>{producto.estado}</td>
                                                    <td>{producto.fecha}</td>
                                                    <td>
                                                        <Button color='primary' onClick={()=>toggleEditModal(producto)}>Editar</Button>

                                                    </td>
                                                </tr>
                                        ))
                                    }


                                </tbody>
                            </table>




        <ModalProducto 
            isOpen={modalOpen} 
            toggleModal={toggleModal} 
            onProductoEditar={fetchProductos}
            isEditar={isEditar}
            productoEditar={productoEditar}
            >
        </ModalProducto>

        </div>



      );
}

export default ProductoLista;