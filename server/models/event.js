

module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    date: DataTypes.DATE,
    duration: DataTypes.NUMBER,
    status: DataTypes.STRING,
    centerId: DataTypes.INTEGER,
    centerName: DataTypes.STRING
  });

  Event.associate = (models) => {
    Event.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
    Event.belongsTo(models.Center, {
      foreignKey: 'centerId',
      onDelete: 'CASCADE'
    });
  };


  return Event;
};
