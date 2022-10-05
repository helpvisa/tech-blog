// dependencies
const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

// create the User model
class User extends Model {
    // instance method to check password (asynchronous)
    async checkPass(pass) {
        const match = await bcrypt.compare(pass, this.password);
        return match;
    }
}

// define table
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }
    },
    {
        hooks: {
            async beforeCreate(user) {
                user.password = await bcrypt.hash(user.password, 10);
                return user;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

// export definition
module.exports = User;