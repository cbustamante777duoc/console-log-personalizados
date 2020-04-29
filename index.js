module.exports = {
    ok,
    info,
    error,
    aviso,
    prueba

}

function ok (mensaje){
    const estilo = 'background-color: green; color:white; font-size:22px; display:block; text-align: center';
    mostrarLog(mensaje,estilo);


}

function info (mensaje ){
    const estilo = 'background-color: #000066; color:#ffffff; font-size:22px; display:block; text-align: center';
    mostrarLog(mensaje,estilo);

}

function error (mensaje){
    const estilo = 'background-color: #000000; color:#3333cc; font-size:22px; display:block; text-align: center';
    mostrarLog(mensaje,estilo);

}

function aviso (mensaje){
    const estilo = 'background-color: #ff8000; color:#3333cc; font-size:22px; display:block; text-align: center';
    mostrarLog(mensaje,estilo);

}

function mostrarLog(mensaje,estilo) {
    console.log('%c %s',estilo,mensaje);
}
function prueba(){
    return 'mensaje de test';
}
