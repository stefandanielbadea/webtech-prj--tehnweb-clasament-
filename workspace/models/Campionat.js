module.exports = function(sequelize, DataTypes) {
    // define entity
    
    var Campionat = sequelize.define('Campionat', {
        numeCampionat : {
            type : DataTypes.STRING,
            unique: true,
            field: 'NumeCampionat'
        },
        idParticipant : {
            type: DataTypes.INTEGER,
            unique: true,
            foreignKey : 'fk_idEchipa',
            field: 'idParticipant'
        },
        numeTara: {
            type: DataTypes.STRING,
            field: 'NumeTara'
        },
        numarEchipePerCampionat : {
            type: DataTypes.INTEGER,
            field:'numarEchipePerCampionat'
        },
    });
        return Campionat;
};