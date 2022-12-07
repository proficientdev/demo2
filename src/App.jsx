import { Component } from "react";
import Contacto from "./components/Contacto";
import Formulario from "./components/Formulario";

class App extends Component {
  constructor() {
    super();
    this.state = {
      contactos: [],
    };
    this.agregarContacto = this.agregarContacto.bind(this);
  }

  agregarContacto(nuevoContacto){
    this.setState((prev)=>({contactos:[...prev.contactos, nuevoContacto]}))
  }
  render() {
    const { contactos } = this.state;

    return (
      <div>
        Funciona
        <Formulario agregarContacto={this.agregarContacto} />
        {contactos.length > 0 &&
          contactos.map((c) => <Contacto key={c.nombre} {...c} />)}
      </div>
    );
  }
}

export default App;
