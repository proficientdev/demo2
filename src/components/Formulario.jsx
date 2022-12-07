import React from "react";

export default class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      contacto: { nombre: "", telefono: "" },
    };
  }
  handleChange(event) {
    console.log(event);
    //this.setState({nombre:event.})
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.agregarContacto();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="nombre" />
        <input type="text" name="telefono" onChange={this.handleChange} />
        <br />
        <input type="submit" value="Agregar" />
      </form>
    );
  }
}
