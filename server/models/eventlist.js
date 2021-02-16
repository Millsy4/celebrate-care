module.exports = function (sequelize, DataTypes) {
    const Eventtable = sequelize.define('Eventtable', {
        ID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Details: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Date: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Wishlist: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Upcoming: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        Image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        CreatedEvent: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        FamilyCode: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });
    return Eventtable;
};