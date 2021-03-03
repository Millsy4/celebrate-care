module.exports = function (sequelize, DataTypes) {
    const Familycode = sequelize.define('Familycode', {
        FamilyCode: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        GrandFirstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        GrandLastName: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
    Familycode.associate = function (models) {
        Familycode.hasMany(models.Familyties, {
            foreignKey: { allowNull: true },
            onDelete: 'cascade'
        });
        Familycode.hasMany(models.Eventtable, {
            foreignKey: { allowNull: true },
            onDelete: 'cascade'
        });
    }

    return Familycode;

};
