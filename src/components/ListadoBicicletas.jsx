
import Bicicleta from "./Bicicleta"

const ListadoBicicletas = ({bicicletas, setBici, eliminarBicicleta}) => {
  
  console.log(bicicletas)

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {bicicletas && bicicletas.length ? (

      <div>
          <h2 className="text-center text-xl font-medium">Lista de Bicicletas</h2>
          <p className="text-center mt-4 mb-8 text-lg">Historial de <span className="text-red-500 font-bold"> Bicicletas</span></p>

          {bicicletas.map( bicicleta => (
            <Bicicleta
              key={bicicleta.id}
              bicicleta={bicicleta}
              setBici={setBici}
              eliminarBicicleta={eliminarBicicleta}
              />
          ))}
      </div>

      ) : (

        <div>
          <h2 className="text-center text-xl font-medium">Aún no hay Bicicletas</h2>
          <p className="text-center mt-4 mb-8 text-lg">Registrar nuevos <span className="text-red-500 font-bold"> Trabajos</span></p>
        </div>

      )}


    </div>
  )
}

export default ListadoBicicletas