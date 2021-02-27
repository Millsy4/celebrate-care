

module.exports = function (sequelize, DataTypes) {
    const Eventtable = sequelize.define('Eventtable', {
        eventIdea: {
            type: DataTypes.STRING,
            allowNull: false,
            validator: {
                min: 4,
                max: 25,
            }
        },
        startDate: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        endDate: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        details: {
            type: DataTypes.STRING,
            allowNull: false,
            validator: {
                min: 4,
                max: 255,
            }
        },
        eventStatus: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    });
    Eventtable.associate = function (models) {
        Eventtable.belongsTo(models.Familycode, {
            foreignKey: { allowNull: true }
        });
    }

    return Eventtable;
};
