module.exports = function (sequelize, DataTypes) {
    const Eventtable = sequelize.define('Eventtable', {
        eventIdea: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        startDate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        endDate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        details: {
            type: DataTypes.STRING,
            allowNull: false
        },
        eventStatus: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        familyCode: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Eventtable;
};