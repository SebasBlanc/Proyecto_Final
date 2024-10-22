import React from "react";

import { Link, Route, BrowserRouter, Switch} from "react-router-dom";
class Menu extends React.Component {
   
    render() { 
        return (  

            
      <body>
            <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="navbar-brand" >Supermercado el Puerto</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <BrowserRouter className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/Eliminar">Eliminar inventario</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Modificar">Modificar inventario</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/ListaProducto">Lista inventario</Link>
                        </li>
                    </ul>

                        

                </BrowserRouter>
            </div>
        </nav>
      </body>

        );
    }
}
 
export default Menu;