import { Component } from "react";
import Productos from "./components/Productos.js";
import Layout from "./components/Layout";
import NavBar from "./components/NavBar";
import Title from "./components/Title";

class App extends Component {
  state = {
    productos: [
      { name: "Tomate", price: 6.9, img: "/productos/tomate.jpg" },
      { name: "Arbejas", price: 8.9, img: "/productos/arbejas.jpg" },
      { name: "Lechuga", price: 2.9, img: "/productos/lechuga.jpg" },
      { name: "Papa", price: 3.5, img: "/productos/papa.jpg" },
      { name: "Camote", price: 3.5, img: "/productos/camote.jpg" },
      { name: "Limón", price: 4.5, img: "/productos/limon.jpg" },
      { name: "Zanahoria", price: 5.5, img: "/productos/zanahoria.jpg" },
      { name: "Palta", price: 1.5, img: "/productos/palta.jpg" },
    ],
    carro: [],
    esCarroVisible: false,
  };

  agregarAlCarro = (producto) => {
    const { carro } = this.state;
    if (carro.find((x) => x.name === producto.name)) {
      const newCarro = carro.map((x) =>
        x.name === producto.name
          ? {
              ...x,
              cantidad: x.cantidad + 1,
            }
          : x
      );
      return this.setState({ carro: newCarro });
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      }),
    });
  };

  mostrarCarro = () => {
    if (!this.state.carro.length) {
      return;
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible });
  };

  render() {
    const { esCarroVisible } = this.state;
    return (
      <div>
        <NavBar
          carro={this.state.carro}
          esCarroVisible={esCarroVisible}
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title />
          <Productos
            agregarAlCarro={this.agregarAlCarro}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
