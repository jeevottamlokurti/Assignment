module.exports = (sequelize, Sequelize) => {
    const Languages  = sequelize.define("languages ", {
      id: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      released_year: {
        type: Sequelize.INTEGER
      },
      githut_rank: {
        type: Sequelize.INTEGER
      },
      pypl_rank: {
        type: Sequelize.INTEGER
      },
      tiobe_rank: {
        type: Sequelize.INTEGER
      },
      created_at:{
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      },
    });
  
    return Languages ;
  };