module.exports = (sequelize,DataTypes) => {
    let alias = "Category"
    let props = {
        id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'id'
		},
		name: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'name'
		}
    }
    let config = {
        tableName: 'categorys',
        timestamps: false
    }

    const Category = sequelize.define(alias,props,config);

    Category.associate = function(models){
        Category.hasMany(models.Operation,{
            as: 'Operation',
            foreignKey:'idCategorys'
        });
	}

    return Category;
}