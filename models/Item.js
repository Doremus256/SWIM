module.exports = function (sequelize, DataTypes) {
     var Item = sequelize.define("Item", {
          item_name: {
               type: DataTypes.STRING,
               allowNull: false,
               validate: {
                    len: [1]
               }
          },
          Item_description: {
               type: DataTypes.TEXT,
               allowNull: false,
               validate: {
                    len: [1]
               }
          },
          Item_price: {
               type: DataTypes.DECIMAL(12, 2),
               allowNull: false,
               validate: {
                    len: [1]
               }
          }
     });

     Item.associate = function (models) {
          Item.belongsTo(models.Vendor, {
               foreignKey: {
                    allowNull: false
               }
          });
     };
     Item.associate = function (models) {
          Item.hasMany(models.Order, {
               onDelete: "cascade"
          });
     };
     return Item;
};