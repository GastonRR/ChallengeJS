module.exports = (sequelize,DataTypes) => {
    let alias = "Type"
    let props = {
        id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
            primaryKey: true,
            autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING(45),
			allowNull: true,
			field: 'name'
		}
    }
    let config = {
        tableName: 'type',
        timestamps: false
    }

    const Type = sequelize.define(alias,props,config);
    Type.associate = function(models){
        Type.hasMany(models.Operation,{
            as: 'Operation',
            foreignKey:'idType'
        });
	}

    return Type;
}