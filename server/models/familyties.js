module.exports = function (sequelize, DataTypes) {
    const Familyties = sequelize.define('Familyties', {
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        }
    });
    Familyties.associate = function (models) {
        Familyties.belongsTo(models.Familycode, {
            onDelete: 'cascade',
            foreignKey: { allowNull: true }
        });
        Familyties.belongsTo(models.Usertable, {
            foreignKey: { allowNull: true },
            onDelete: 'cascade'
        });

    };
    return Familyties;
}
