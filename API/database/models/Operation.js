module.exports = (sequelize,DataTypes) => {
    let alias = "Operation"
    let props = {
        id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: true,
			field: 'date'
		},
		concept: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'concept'
		},
		amount: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'amount'
		},
		idType: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'type',
				key: 'id'
			},
			field: 'idType'
		},
		idCategorys: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'categorys',
				key: 'id'
			},
			field: 'idCategorys'
		},
		idAccount: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'account',
				key: 'id'
			},
			field: 'idAccount'
		}
    }
    let config = {
        tableName: 'operations',
        timestamps: false
    }

    const Operation = sequelize.define(alias,props,config);
    
    Operation.associate = function(models){
		Operation.belongsTo(models.Type,{
			as:'Type',
			foreignKey:'idType'
        });
        Operation.belongsTo(models.Category,{
			as:'Category',
			foreignKey:'idCategorys'
        });
        Operation.belongsTo(models.Account,{
			as:'Account',
			foreignKey:'idAccount'
		});
	}



    return Operation;
}