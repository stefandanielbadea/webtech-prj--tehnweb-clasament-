module.exports = function(sequelize, DataTypes) {
    // define entity
    
    var Echipa = sequelize.define('echipa', {
    
    idEchipa:{
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
    },
    numeEchipa: {
    type: DataTypes.STRING,
    field: 'numeEchipa',
    unique: true
    },
    buget: {
    type: DataTypes.INTEGER,
    field: 'buget'
    },
    pozitieClasament: {
    type: DataTypes.INTEGER,
    field: 'pozitieClasament'
    },
    punctaj: {
        type: DataTypes.INTEGER,
        field: 'punctaj'
    }
    }, {
    
    timestamps : false,
    tablename : 'Echipa'
    });
    
    return Echipa;
};