

module.exports = (sequelize, DataTypes) => {
  const Center = sequelize.define('Center', {
    name: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: 'Center already exist'
      },
      allowNull: false,
    },
    description: DataTypes.TEXT,
    centerId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    location: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    capacity: DataTypes.NUMBER,
    facilities: DataTypes.STRING

  });

  Center.associate = (models) => {
    Center.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
    Center.hasMany(models.Event, {
      foreignKey: 'centerId',
      onDelete: 'CASCADE'
    });
  };

  return Center;
};
