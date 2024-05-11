import "dotenv/config";
import express from "express";
import { IS_PROD, PORT } from "./constants";
import { router } from "./routes";

async function main() {
  const app = express();

  app.use(express.json());
  app.use(router);

  app.listen(PORT, () => {
    console.log(
      `🚀 Server is running on port: ${PORT} and in ${
        IS_PROD ? "production" : "development."
      }`
    );
  });
}

main();
