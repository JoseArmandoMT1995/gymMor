
function coneccionFirebase(){
    var firebaseConfig = {
        apiKey: "AIzaSyDBeGapsH2SItQM4GcOgIjuQ2ZxOfOizIs",
        authDomain: "employees-d38ba.firebaseapp.com",
        projectId: "employees-d38ba",
        storageBucket: "employees-d38ba.appspot.com",
        messagingSenderId: "362857879538",
        appId: "1:362857879538:web:d520323fa66a2d03e1fd6b",
        measurementId: "G-9XWSHEMJ8Q"
    };
    firebase.initializeApp(firebaseConfig);
    return firebase.firestore();
}