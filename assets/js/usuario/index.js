localStorageArranque();
console.log(storageUsuarioLogin);
var coleccion = "usuarios";

const obtenerUsuarios = () => db.collection(coleccion).get();
function editarUsuario(id, datos) 
{
    db= coneccionFirebase();
    db.collection(coleccion).doc(id).update(datos);
}

if (storageUsuarioLogin === []) {
    window.location = "index.html";
} else {
    $("#nombre").val(storageUsuarioLogin.nombre);
    $("#apelidos").val(storageUsuarioLogin.app + " " + storageUsuarioLogin.apm);
    $("#email").val(storageUsuarioLogin.email);
    $("#app").val(storageUsuarioLogin.app);
    $("#apm").val(storageUsuarioLogin.apm);
}

$('#modificarUsuario').click(function () {
    nombre= $("#nombre").val();
    app= $("#app").val();
    apm= $("#apm").val();
    email= $("#email").val();
    password=storageUsuarioLogin.password
    var id= String(storageUsuarioLogin.id);

    editarUsuario(id, {
        nombre:nombre,
        app:app,
        apm:apm,
        email:email,
        password:password
      });
      alert("se ha editado su informacion");
      window.location="index.html";
});