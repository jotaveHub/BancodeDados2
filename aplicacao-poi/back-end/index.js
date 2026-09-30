import sequelize from "./database/sequelize.js";
import { DataTypes } from "sequelize";

const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
    email:{
      type: DataTypes.STRING,
      primaryKey: true
    }
  },
  {
    // Other model options go here
  },
);

User.sync();

User.create({
    firstName: 'Paulo',
    lastName: 'Freitas',
    email: 'accurategx@gmail.com' 
})
  .then((user) => {
    console.log('Criado com sucesso')
  })
  .catch((error) => {
    console.log('falha ao criar', error);
  });
