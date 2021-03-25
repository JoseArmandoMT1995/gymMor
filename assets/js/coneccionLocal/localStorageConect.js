function localStorageArranque() {
    var piezas = 0;
    //La sintaxis para leer el ítem almacenado en localStorage es la siguiente
    //obtiene del storage y almacena datos en objeto
    if (!!(window.localStorage.getItem('storageUsuarioLogin'))) {
        storageUsuarioLogin = JSON.parse(window.localStorage.getItem('storageUsuarioLogin'));
    } else {
        storageUsuarioLogin = [];
    }
    return storageUsuarioLogin;
}
function localStorageAgregado() {
    //El siguiente código accede al objeto local Storage actual y agrega un ítem al mismo usando
    window.localStorage.setItem('storageUsuarioLogin', JSON.stringify(storageUsuarioLogin));
    storageUsuarioLogin = JSON.parse(window.localStorage.getItem('storageUsuarioLogin'));
}