'use strict';
module.exports = (sequelize, DataTypes) => {
  const Articles = sequelize.define('Articles', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    content: DataTypes.STRING,
    date: DataTypes.DATE,
    category: DataTypes.STRING
  }, {});
  Articles.associate = function(models) {
    // associations can be defined here
  };
  return Articles;
};
//este comando gera os arquivos para modelagem do banco.
//npx sequelize-cli model:create --name Articles --attributes title:string,author:string,content:string,date:date,category:string --attributes title:string,author:string,content:string,date:date,category:string