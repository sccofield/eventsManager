

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [4, 20],
          msg: 'Username must be betwen 4 and 20 characters'
        }
      },
      unique: {
        args: true,
        msg: 'Username already used'
      }
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Email already used'
      },
      validate: {
        isEmail: {
          args: true,
          msg: 'The email is not valid. Please input a valid email.'
        }
      }
    },

    firstName: DataTypes.STRING,

    lastName: DataTypes.STRING,

    password: {
      unique: {
        args: true,
        msg: 'Password is required'
      }
    },

    userType: DataTypes.STRING
  });

  User.associate = (models) => {
    User.hasMany(models.Event, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
    User.hasMany(models.Center, {
      foreignKey: 'userId',
      onDelete: 'CASCADE'
    });
  };

  return User;
};
