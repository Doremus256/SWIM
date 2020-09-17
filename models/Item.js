module.exports = function(sequelize, DataTypes) {
     var Item = sequelize.define("Item", {
          item_name: {
               type: DataTypes.STRING,
               allowNull: false,
               validate: {
                    len: [1]
                    }
          },
          item_description: {
               type: DataTypes.TEXT,
               allowNull: false,
               validate:{
                    len: [1]
               }
          },
          item_price: {
               type: DataTypes.DECIMAL(12,2),
               allowNull: false,
               validate: {
                    len: [1]
               }
          },
          item_QOH: {
               type: DataTypes.INTEGER,
               allowNull: true,
               validate: {
                    len: [1]
               }
          }
     });

     Item.associate = function(models) {
          Item.belongsTo(models.Vendor, {
               foreignKey: {
                    allowNull: false
               }
          });
     };
     Item.associate = function(models) {
          Item.hasMany(models.Order, {
            onDelete: "cascade"
          });
        };
     return Item;
};