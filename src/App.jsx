import {useState, useEffect} from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoBicicletas from "./components/ListadoBicicletas";


function App() {

  const [bicicletas, setBicicletas] = useState([]);
  const [bici, setBici] = useState({});

  useEffect( ()=>{
    const obtenerLS = () =>{
      const bicisLS = JSON.parse(localStorage.getItem('bicicletas')) ?? [];

      setBicicletas(bicisLS)
    }
  },[])

  useEffect( ()=>{
    localStorage.setItem('bicicletas', JSON.stringify (bicicletas));
  },[bicicletas] )

  const eliminarBicicleta = id => {
    const biciActualizada = bicicletas.filter( bici => bici.id !== id);

    setBicicletas(biciActualizada)
  }

  return (
    <div className="container mx-auto">
      <Header />

      <div className="mt-12 md:flex">
      <Formulario 
        bicicletas = {bicicletas}
        setBicicletas = {setBicicletas}
        bici = {bici}
        setBici = {setBici}
      />
      <ListadoBicicletas 
        bicicletas={bicicletas}
        setBici={setBici}
        eliminarBicicleta={eliminarBicicleta}
      />
      </div>

    </div>
  )
}

export default App
