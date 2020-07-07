$(function(){
	console.log("Validacion Login");

	$("#btn_ingresar").click(function(){
		console.log("Login...");
		var parameters = {
			"user": $("#txt_user").val(),
			"contra": $("#txt_contra").val(), 
		}
					console.log(parameters);

					if (user = 'admin') {
   					alert("Bienvenido cliente");
			   		location.href = "resepcion.html";
					} else {
   					alert("Usuario o contraseña incorrecta");
					}
		})

})