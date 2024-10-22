import {
    Button
} from 'reactstrap';
import React from "react";


class Main extends React.Component {

    render() { 
        return (  


            <body>
                <div className="row container-fluid content min-vh-100 ">
                   <div className="col-md-12">
                    <h2>Bienvenido al manejo del inventario</h2>
                    <p>Administre su inventario de manera eficiente y efectiva con nuestras herramientas.</p>
                    
                    <Button color="primary" className="btn btn-custom" onclick="location.href='crearProducto.html'" >
                        Empezar
                    </Button>
                   </div>
                </div>

            </body>
            




        );
    }
}
 
export default Main;