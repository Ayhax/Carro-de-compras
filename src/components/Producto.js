import { Component } from "react";
import Button from "./Button";

const styles = {
  producto: {
    border: "solid 1px #eee",
    boxShadow: "0 5px 5px rgb(0, 0, 0, 0.1)",
    padding: "10px 15px",
    borderRadius: "5px",
    maxWidth: "100%",
    height: "auto",
    imageRendering: "smooth",
  },
  img: {
    width: "200px",
  },
};
class Producto extends Component {
  render() {
    const { producto, agregarAlCarro } = this.props;

    return (
      <div style={styles.producto}>
        <img style={styles.img} alt={producto.name} src={producto.img} />
        <h3>{producto.name}</h3>
        <p>S/. {producto.price}0</p>
        <Button onClick={() => agregarAlCarro(producto)}>
          Agregar al carro
        </Button>
      </div>
    );
  }
}
export default Producto;
