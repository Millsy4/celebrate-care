module.exports = function (sequelize, DataTypes) {
    const Eventtable = sequelize.define('Eventtable', {
        eventIdea: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        startDate: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        endDate: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });
    return Eventtable;
};