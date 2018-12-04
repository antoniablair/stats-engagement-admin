module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('tokens', {
    'name': {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'tokens',
    
    timestamps: false,
    
  });

  Model.associate = (models) => {};

  return Model;
};

