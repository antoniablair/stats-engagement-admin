module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('questions', {
    'game_id': {
      type: DataTypes.INTEGER,
    },
    'text': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'questions',
    underscored: true,
    timestamps: false,
    
  });

  Model.associate = (models) => {
    Model.belongsTo(models.games, { foreignKey: 'game_id'});
  };

  return Model;
};

