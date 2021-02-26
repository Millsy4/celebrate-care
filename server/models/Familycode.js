module.exports = function (sequelize, DataTypes) {
    const Familycode = sequelize.define('Familycode', {
        FamilyCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        GrandFirstName: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Frodo',
        },
        GrandLastName: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: 'Baggins',
        }
    });
    return Familycode;
};
