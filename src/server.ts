import { app } from "./";
const PORT = process.env.PORT || 3000;
const IS_PROD = process.env.NODE_ENV === "production";

const startServer = (port: string | number) => {
  return app.listen(port, () => {
    console.log(
      `🚀 Server is running on port: ${port} and in ${
        IS_PROD ? "production" : "development."
      }`
    );
  });
};

startServer(PORT);
