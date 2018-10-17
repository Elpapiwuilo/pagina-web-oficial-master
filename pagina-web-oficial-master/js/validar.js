function validar(){
	
var nombre, contraseña, repetirContraseña;
nombre = document.getElementById("nombre").value;
contraseña = document.getElementById("contraseña").value;
repetirContraseña = document.getElementById("repetirContraseña").value;



if (nombre === "" || contraseña ==="" || repetirContraseña === "" ) {
	alert("Todos los campos son obligatorios");
	return false;
}
else if (nombre.length>15) {
	alert("El nombre es muy largo");
	return false;
}
else if (contraseña.length>8) {
	alert("La contraseña debe tener un mìnimo de 8 caracteres");
	return false;
}
else if (repetirContraseña.length>8) {
	alert("La contraseña debe tener un mìnimo de 8 caracteres");
	return false;
}


}







