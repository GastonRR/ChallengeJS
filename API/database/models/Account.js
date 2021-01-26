module.exports = (sequelize,DataTypes) => {
    let alias = "Account"
    let props = {
        id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		balance: {
			type: DataTypes.FLOAT,
			allowNull: true,
			field: 'balance'
		},
		idUser: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'user',
				key: 'id'
			},
			field: 'idUser'
		}
    }
    let config = {
        tableName: 'account',
        timestamps: false
    }

    const Account = sequelize.define(alias,props,config);
    

    Account.associate = function(models){
		Account.belongsTo(models.User,{
			as:'User',
			foreignKey:'idUser'
        });
        Account.hasMany(models.Operation,{
            as: 'Operations',
            foreignKey:'idAccount'
        });
	}


    return Account;
}