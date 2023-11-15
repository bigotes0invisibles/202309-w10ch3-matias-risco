import chalk from "chalk";
import { startServer } from "./server/app.js";
import "./server/index.js";
import conecToDatabase from "./database/index.js";

const port = process.env.PORT ?? 4000;
if (!process.env.MONGODB_URL) {
  console.log(chalk.red("MissingMongoDB Connecting String"));
  process.exit();
}

const mongoUrl = process.env.MONGODB_URL;

await conecToDatabase(mongoUrl);
startServer(+port);
