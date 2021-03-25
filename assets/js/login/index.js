coleccion = "usuarios";
db = coneccionFirebase();
arranqueLoginFirebase();
localStorageArranque();
console.log(listaElementos);
// inicio localStorage
function localStorageAgregarUsuario() {
    storageUsuarioLogin = [];
    storageUsuarioLogin = usuario;
    localStorageAgregado();      
}
// fin localStorage
//inicio Firebase data
const obtenerUsuarios = () => db.collection(coleccion).get();
const addUsuarios = (
    nombre,
    password,
    app,
    apm,
    email
) =>
db.collection(coleccion).doc().set({
    nombre,
    password,
    app,
    apm,
    email
});
function arranqueLoginFirebase(){
    window.addEventListener("DOMContentLoaded", async (e) => {
        const querySnapshot = await obtenerUsuarios();
        querySnapshot.forEach((doc) => {
            listaElementos.push({
                nombre:doc.data().nombre,
                app:doc.data().app,
                apm:doc.data().apm,
                email:doc.data().email,
                password:doc.data().password, 
                id:doc.id
            });
        });
    });
}


$('#registroSubmit').click(function () {
    nombre = $("#nombreRegistro").val();
    password = $("#passwordRegistro").val();
    app = $("#appRegistro").val();
    apm = $("#apmRegistro").val();
    email = $("#emailRegistro").val();
    permisoLogin = filtroLogin(false);
    if (permisoLogin=== false) {
        addUsuarios(
            nombre,
            password,
            app,
            apm,
            email);
        alert("se ha generado un nuevo usuario");
        $("#nombreLogin").val(nombre);
        $("#passwordLogin").val(password);
        arranqueLoginFirebase();
        iniciarSesion();
    } else {
        alert("este usuario ya esta registrado");
    }
});

$('#loginSubmit').click(function () {
    email = $("#nombreLogin").val();
    password = $("#passwordLogin").val();
    permisoLogin = filtroLogin(formulario);
    permisoLogin = (permisoLogin === true) ? 'usuario encontrado' : 'no registrado';
    
    if (permisoLogin === 'usuario encontrado') {
        alert(permisoLogin);
        window.location="usuario.html";
    } else {
        alert(permisoLogin);
    }
});
function filtroLogin(login){
    let usuarios = listaElementos;
    for (let index = 0; index < usuarios.length; index++) {
        if (login === true && usuarios[index].email === email && usuarios[index].password === password) {
            console.log(index);
            console.log(email + "==" + usuarios[index].email);
            console.log(password + "==" + usuarios[index].password);
            usuario = usuarios[index];
            permisoLogin = true;
            localStorageAgregarUsuario();
            
        }if (login === false && usuarios[index].email === email ) {
            console.log(index);
            console.log(email + "==" + usuarios[index].email);
            console.log(password + "==" + usuarios[index].password);
            permisoLogin = true;
        }else{
        }   
    }
    return permisoLogin;
}