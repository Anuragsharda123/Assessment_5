import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db";
import User from "./User";

class JobSeeker extends Model {
    public id?: number;
    public first_name!: string;
    public last_name!: string;
    public resume!: string;
}

JobSeeker.init({
    firstname: { type: DataTypes.STRING, allowNull: false },
    lastname: { type: DataTypes.STRING, allowNull: false },
    resume: {type:DataTypes.STRING, allowNull:false}
}, {
    sequelize,
    modelName:'JobSeeker'
})

User.hasOne(JobSeeker);
JobSeeker.belongsTo(User);

export default JobSeeker;