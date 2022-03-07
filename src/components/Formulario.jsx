import {useState, useEffect} from "react";
import Error from "./Error";

function Formulario({bicicletas, setBicicletas, bici, setBici}) {

  const [marca, setMarca] = useState("");
  const [serial, setSerial] = useState("");
  const [cliente, setCliente] = useState("");
  const [contacto, setContacto] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [error, setError] = useState(false)

  
  useEffect(()=>{
    if(Object.keys(bici).length > 0){
      setMarca(bici.marca)
      setSerial(bici.serial)
      setCliente(bici.cliente)
      setContacto(bici.contacto)
      setFecha(bici.fecha)
      setDescripcion(bici.descripcion)
    }
  }, [bici])

  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36)

    return random + fecha;

  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    // VALIDACIÓN DE FORMULARIO 

    if([marca, serial, cliente, contacto, fecha, descripcion].includes('')){
      setError(true)
    }else{
      setError(false)
    }

    // Objeto con todos los datos de la bicicleta

    const datosBicicleta = {
      marca, 
      serial, 
      cliente, 
      contacto, 
      fecha, 
      descripcion  
    }

    if(bici.id){
      //Editar Form
      datosBicicleta.id = bici.id

      const biciActualizada = bicicletas.map( biciState => biciState.id === bici.id ? datosBicicleta : biciState)

      setBicicletas(biciActualizada)
      setBici({})

    }else{
      //Generar Id
      datosBicicleta.id = generarId()
      //Registrando nueva bici
      setBicicletas([...bicicletas, datosBicicleta]);

    }


    // Resetear el form
    setMarca("");
    setSerial("");
    setCliente("");
    setContacto("");
    setFecha("");
    setDescripcion("");
  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="text-center text-xl font-medium">Registro de Bicicletas</h2>
        <p className="text-center mt-4 mb-8 text-lg">Añadir Bicicletas y <span className="text-red-500 font-bold"> Administrarlas</span>
        </p>

        <form onSubmit={handleSubmit} className="bg-white py-5 px-5 mb-10 mx-3 rounded-lg shadow-md">
          {error && <Error mensaje="*Por favor llenar todos los campos*"/>}
          <div className="mb-5">
            <label htmlFor="marca" className="block uppercase text-gray-800 font-bold">Marca de la Bicicleta</label>
            <input type="text" id="marca" className="border-2 rounded-lg w-full p-2 mt-2 placeholder-red-500" placeholder="Specialized" 
            value={marca}
            onChange={ (e) => setMarca(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="serial" className="block uppercase text-gray-800 font-bold">Seríal de Bicicleta</label>
            <input type="text" id="serial" className="border-2 rounded-lg w-full p-2 mt-2 placeholder-red-500" placeholder="FAG-2304-K" 
            value={serial}
            onChange={ (e) => setSerial(e.target.value)}/>
          </div>  

          <div className="mb-5">
            <label htmlFor="cliente" className="block uppercase text-gray-800 font-bold">Nombre del Cliente</label>
            <input type="text" id="cliente" className="border-2 rounded-lg w-full p-2 mt-2 placeholder-red-500" placeholder="Juan David Rendón"
            value={cliente}
            onChange={ (e) => setCliente(e.target.value)}/>
          </div>  

          <div className="mb-5">
            <label htmlFor="contacto-cliente" className="block uppercase text-gray-800 font-bold">Contacto del Cliente</label>
            <input type="number" id="contacto-cliente" className="border-2 rounded-lg w-full p-2 mt-2 placeholder-red-500" placeholder="321 323 5555"
            value={contacto}
            onChange={ (e) => setContacto(e.target.value)}/>
          </div> 
          
          <div className="mb-5">
            <label htmlFor="fecha-entrada" className="block uppercase text-gray-800 font-bold">Fecha de Entrada</label>
            <input type="date" id="fecha-entrada" className="border-2 rounded-lg w-full p-2 mt-2 placeholder-red-500"
            value={fecha}
            onChange={ (e) => setFecha(e.target.value)}/>
          </div> 

          <div className="mb-5">
            <label htmlFor="descripcion" className="block uppercase text-gray-800 font-bold">Descripción</label>
            <textarea id="descripcion" className="border-2 rounded-lg w-full p-2 mt-2 placeholder-red-500" placeholder="¿Qué hay que hacerle a la Bicicleta?..."
            value={descripcion}
            onChange={ (e) => setDescripcion(e.target.value)}>
            </textarea>
          </div> 

          <input type="submit" className="uppercase bg-red-500 w-full p-3 text-white font-bold rounded-lg hover:bg-red-600 cursor-pointer transition-all"
          value={bici.id ? 'Editar Bicicleta' : 'Registrar Bicicleta'}
          />

        </form>
    </div>
  )
}

export default Formulario