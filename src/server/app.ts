import "dotenv/config";
import express from "express";
import chalk from "chalk";

const app = express();

export const startServer = (port: number) => {
  app.listen(+port, () => {
    console.log(
      chalk.blue(
        `lisening in port ${chalk.bgMagenta(`http://localhost:${port}/`)}`,
      ),
    );
  });
};

export default app;
