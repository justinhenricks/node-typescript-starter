import "dotenv/config";
import express from "express";
import { IS_PROD, PORT } from "./constants";

async function main() {
  const app = express();

  app.use(express.json());
  // app.use(router); TODO

  app.listen(PORT, () => {
    console.log(
      `🚀 Server is running on port: ${PORT} and in ${
        IS_PROD ? "production" : "development."
      }`
    );
  });
}

main();
