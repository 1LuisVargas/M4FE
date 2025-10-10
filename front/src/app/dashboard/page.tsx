const dashboard = () => {
    return (
        <div className="flex justify-center flex-col items-center">
            <h1 className="h1">This is the dashboard page</h1>
            <p className="text-xl"><span className="font-bold">Nombre:</span> Lucho</p>
            <p className="text-xl"><span className="font-bold">Apellido:</span> Vargas</p>
            <p className="text-xl"><span className="font-bold">Edad:</span> 25</p>
            <p className="text-xl"><span className="font-bold">Pais:</span> Argentina</p>
            <p className="text-xl"><span className="font-bold">Direccion:</span> 123 Calle, Buenos Aires</p>
        </div>
    )
}

export default dashboard;