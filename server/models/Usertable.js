const bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
    const Usertable = sequelize.define('Usertable', {
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }

        },
        FirstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        LastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                min: 6,
                max: 16,
            }
        }
    });
    Usertable.prototype.validPassword = function (Password) {
        return bcrypt.compareSync(Password, this.Password);
    };
    Usertable.addHook("beforeCreate", (user) => {
        user.Password = bcrypt.hashSync(
            user.Password,
            bcrypt.genSaltSync(10),
            null
        );
    });
    Usertable.associate = function (models) {
        Usertable.hasMany(models.Familyties, {
            foreignKey: { allowNull: true },
        });
    }
    return Usertable;
};
