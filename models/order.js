module.exports = function(sequelize, DataTypes) {
     var Order = sequelize.define("Order", {
          item_name: {
               type: DataTypes.STRING,
               allowNull: false,
               validate: {
                    len: [1]
               }
          },
          item_price: {
               type: DataTypes.DECIMAL(12.2),
               allowNull: false,
               validate: {
                    len: [1]
               }
          },
          item_quantity: {
               type: DataTypes.INTEGER,
               allowNull: false,
               validate: {
                    len: [1]
               }
          },
          item_QIT: {
               type: DataTypes.INTEGER,
               allowNull: false,
               validate: {
                    len: [1]
               }
          },
          item_delivery: {
               type: DataTypes.INTEGER,
               allowNull: false,
               validate:{
                    len: [1]
               }
          }
     }, {timestamps: false});


     Order.associate = function(models) {
          Order.belongsTo(models.Item, {
               foreignKey: {
                    allowNull: false
               }
          });
     };
     return Order;
};