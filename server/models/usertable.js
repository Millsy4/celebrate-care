module.exports = function (sequelize, DataTypes) {
    const Usertable = sequelize.define('Usertable', {
        Email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        FirstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        LastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        FamilyCode: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
    return Usertable;
};