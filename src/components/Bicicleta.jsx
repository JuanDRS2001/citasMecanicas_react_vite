const Bicicleta = ({bicicleta, setBici, eliminarBicicleta}) => {
  
  const{marca, serial, cliente, contacto, fecha, descripcion, id} = bicicleta

  const handleEliminar = ()=>{
    const preguntar = confirm("Has completado el trabajo?")

    if(preguntar){
      eliminarBicicleta(id)
    }
  }

    return (
      <div className="bg-white shadow-md m-5 p-5 mx-5 my-3 rounded-lg">
  
          <p className="uppercase font-bold mb-3 text-gray-800">Marca de Bicicleta:{''} <span className="normal-case font-normal">{marca}</span></p>
  
          <p className="uppercase font-bold mb-3 text-gray-800">Seríal de Bicicleta:{''} <span className="normal-case font-normal">{ serial}</span></p>
  
          <p className="uppercase font-bold mb-3 text-gray-800">Cliente:{''} <span className="normal-case font-normal">{bicicleta.cliente}</span></p>
  
          <p className="uppercase font-bold mb-3 text-gray-800">Contacto:{''} <span className="normal-case font-normal">{bicicleta.contacto}</span></p>
  
          <p className="uppercase font-bold mb-3 text-gray-800">Fecha de Entrada:{''} <span className="normal-case font-normal">{bicicleta.fecha}</span></p>
  
          <p className="uppercase font-bold mb-3 text-gray-800">Descripción:{''} <span className="normal-case font-normal">{bicicleta.descripcion}</span></p>

          <div className="mt-5">
            <button type="button" className="bg-indigo-500 hover:bg-indigo-600 py-1 px-4 rounded-md font-medium mr-2 "
            onClick={() => setBici(bicicleta)}
            >Editar</button>

            <button type="button" className="bg-red-500 hover:bg-red-600 py-1 px-4 rounded-md font-medium"
            onClick={handleEliminar}
            >Eliminar</button>
          </div>
  
      </div>
      
    )
  }
  
  export default Bicicleta