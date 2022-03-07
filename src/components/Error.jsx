function Error({mensaje}){

    return(
        <div className="text-red-600 font-bold mt-3 mb-10 text-center uppercase">
            <p>{mensaje}</p>
        </div>  
    )
}

export default Error;