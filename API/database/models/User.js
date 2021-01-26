module.exports = (sequelize,DataTypes) => {
    let alias = "User"
    let props = {
        id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		username: {
			type: DataTypes.STRING(150),
			allowNull: false,
			field: 'username'
		},
		email: {
			type: DataTypes.STRING(255),
			allowNull: false,
			field: 'email'
		},
		password: {
			type: DataTypes.STRING(150),
			allowNull: false,
			field: 'password'
		}
    }
    let config = {
        tableName: 'user',
        timestamps: false
    }

    const User = sequelize.define(alias,props,config);
    User.associate = function(models){
		User.hasOne(models.Account,{
			as:'Account',
			foreignKey:'idUser'
		});
	}

    return User;
}