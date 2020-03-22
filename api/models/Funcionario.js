/**
 * Funcionario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

  Nombre:{
    type:"string",
    required:true,
  },
  Apellido:{
    type:"string",
    required:true,
  },
  Rut:{
    type:"string",
    required:true,
  },
  Contrasenna:{
    type:"string",
    required:true,
  },
  Perfil:{
    type:"string",
    required:true,
    isIn:['user','admin','super_admin'],
  },
  UnidadAdministrativa:{
    type:"string",
    required:true,
    isIn: ['Secretaria', 'Unidad de Soporte y Equipamiento',
     'Unidad de Desarrollo', 'Gestor de Redes y Telecomunicaciones',
     'Unidad de Proyectos','SIDRA','Operaciones'],
  },
  Cargo:{
    type:"string",
    required:true,
  },

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

  },

};

