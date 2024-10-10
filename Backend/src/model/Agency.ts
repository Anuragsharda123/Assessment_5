import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db";
import User from "./User";

class Agency extends Model {
    public id?: number;
    public first_name!: string;
    public last_name!: string;
}

Agency.init({
    firstname: { type: DataTypes.STRING, allowNull: false },
    lastname: { type: DataTypes.STRING, allowNull: false },
}, {
    sequelize,
    modelName:'Agency'
});

User.hasOne(Agency);
Agency.belongsTo(User);

export default Agency;