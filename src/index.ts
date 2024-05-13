import "dotenv/config";
import express from "express";
import { IS_PROD, PORT } from "./constants";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

const startServer = (port: string | number) => {
  return app.listen(port, () => {
    console.log(
      `🚀 Server is running on port: ${port} and in ${
        IS_PROD ? "production" : "development."
      }`
    );
  });
};

if (require.main === module) {
  startServer(PORT);
}

export { app, startServer };
