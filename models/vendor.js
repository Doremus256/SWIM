module.exports = function(sequelize, DataTypes) {
  var Vendor = sequelize.define("Vendor", {
    vendor_name: DataTypes.STRING,
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    vendor_name:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len:[1]
      }
    },
    item_delivery: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        len:[1]
      }
    }
  });
   
  Vendor.associate = function(models) {
    Vendor.hasMany(models.Item, {
      onDelete: "cascade"
    });
  };
  return Vendor;
};