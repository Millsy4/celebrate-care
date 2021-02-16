module.exports = function (sequelize, DataTypes) {
    const Familycode = sequelize.define('Familycode', {
        FamilyCode: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
    return Familycode;
};