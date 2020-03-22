/**
 * FuncionarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  /*
  *retornaVistaForm retorna la vista del formulario 
  de registro del nuevo funcionario
  */
	retornaVistaForm: function (req, res){
		//aqui va el código de retornaVista
		//console.log("ACA ESTOY");


	/*fn: async function () {
		var selectperfil = await Perfil.find();
    return exits.success({
    	selectperfil:selectperfil
    });
	fn2: async function () {
		var selectAdmin = await UnidadAdministrativa.find();
    return exits.success({
    	selectAdmin:selectAdmin
    });*/
		var pathToView='pages/entrance/signup';
		return res.view(pathToView);
	},
	crearContrasenna: function(rut){
		var pass='12334';
		return pass;
	},
	validarRut: function(rut){

	    // Despejar Puntos
	    var valor = rut.value.replace('.','');
	    // Despejar Guión
	    valor = valor.replace('-','');
	    
	    // Aislar Cuerpo y Dígito Verificador
	    cuerpo = valor.slice(0,-1);
	    dv = valor.slice(-1).toUpperCase();
	    
	    // Formatear RUN
	    rut.value = cuerpo + '-'+ dv
	    
	    // Si no cumple con el mínimo ej. (n.nnn.nnn)
	    if(cuerpo.length < 7) { rut.setCustomValidity("RUT Incompleto"); return false;}
	    
	    // Calcular Dígito Verificador
	    suma = 0;
	    multiplo = 2;
	    
	    // Para cada dígito del Cuerpo
	    for(i=1;i<=cuerpo.length;i++) {
	    
	        // Obtener su Producto con el Múltiplo Correspondiente
	        index = multiplo * valor.charAt(cuerpo.length - i);
	        
	        // Sumar al Contador General
	        suma = suma + index;
	        
	        // Consolidar Múltiplo dentro del rango [2,7]
	        if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
	  
	    }
	    
	    // Calcular Dígito Verificador en base al Módulo 11
	    dvEsperado = 11 - (suma % 11);
	    
	    // Casos Especiales (0 y K)
	    dv = (dv == 'K')?10:dv;
	    dv = (dv == 0)?11:dv;
	    
	    // Validar que el Cuerpo coincide con su Dígito Verificador
	    if(dvEsperado != dv) { rut.setCustomValidity("RUT Inválido"); return false; }else{}
	    
	    // Si todo sale bien, eliminar errores (decretar que es válido)
	    rut.setCustomValidity('');
	},
	errorRegistro: function(req,res){

	},
	procesarFormulario: async function(req,res){
		var nombreFuncionario=req.param('nombre');
		var apellidoFuncionario=req.param('apellido');
		var rutFuncionario=req.param('rut');
		var cargoFuncionario=req.param('cargo');
		var perfilFuncionario=req.param('perfil');
		var uniAdminFuncionario=req.param('unidAdmin');
		var passFuncionario =req.param('pass');
		console.log(perfilFuncionario);
		var newFuncionario = await Funcionario.create({Nombre: nombreFuncionario, Apellido: apellidoFuncionario, Rut:rutFuncionario, Cargo:cargoFuncionario, Perfil: perfilFuncionario,UnidadAdministrativa: uniAdminFuncionario, Contrasenna:passFuncionario }).fetch();
		
		sails.log(`Hi, ${newFuncionario.Nombre}!  Your id is ${newFuncionario.id}.`);//console.log(' Hola, '+ ${newUser.Nombre} +' tu id es ' ${newUser.id});
		//sails.log(`Hi, ${newUser.fullName}!  Your id is ${newUser.id}.`);
		//res.view('/login');
			


	},
	desplegarLogin: function(req,res){
		var pathToView='pages/entrance/login';
		return res.view(pathToView);
	},

	validarLogin: async function(req, res){
		var pathToView='pages/dashboard/welcome';
		var rutFuncionario=req.param('rut');
		var passFuncionario =req.param('pass');

		var users = await Funcionario.find({ Rut: rutFuncionario })
		var pass =  await Funcionario.find({Contrasenna: passFuncionario})
		var usuario = await Funcionario.find({
									  where: {Rut:rutFuncionario},
									  select: ['Nombre', 'Perfil']
									});
		//console.log(usuario.Funcionario.Nombre);
		if (!pass || !users){
			res.send({
				'success':false,
				'message':'Usuario o Contraseña incorrecta. intente nuevamente',
			});
		}else{
			return res.view(pathToView)
		}

	},
    	

  
};

