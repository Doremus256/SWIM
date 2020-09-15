module.exports = function(sequelize, DataTypes) {
     var Bark = sequelize.define("Bark", {
          title: {
               type: DataTypes.STRING,
               allowNull: false,
               validate: {
                    len: [1]
                    }
          },
          body: {
               type: DataTypes.TEXT,
               allowNull: false,
               len: [1]
     }
     });
   
     Bark.associate = function(models) {
          Bark.belongsTo(models.Author, {
               foreignKey: {
                    allowNull: false
               }
          });
     };
     return Bark;
};