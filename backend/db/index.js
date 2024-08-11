import { Sequelize } from "sequelize";
import dotenv from "dotenv"
dotenv.config();

const sequelize = new Sequelize("mysql://u8ougor1hupljouu:JyRSJMSYmRGSCDssY45m@bdf1wfqf5ac34ak9cgkh-mysql.services.clever-cloud.com:3306/bdf1wfqf5ac34ak9cgkh", {
    host: 'localhost',
    dialect: 'mysql',
});

export default sequelize;