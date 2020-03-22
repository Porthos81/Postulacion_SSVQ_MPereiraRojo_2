module.exports = {


  friendlyName: 'View clear',


  description: 'Display "Clear" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/clear'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
