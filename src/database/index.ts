import chalk from "chalk";
import mongoose from "mongoose";

const conecToDatabase = async (mongoUrl: string) => {
  try {
    await mongoose.connect(mongoUrl);
  } catch (error) {
    console.log(
      chalk.red(
        "Error to connecting to the database" + (error as Error).message,
      ),
    );
  }
};

export default conecToDatabase;
