import express from "express";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.send("🚀 Hello World!");
  } catch (error) {
    return next(error);
  }
});

router.use((err: unknown, req: express.Request, res: express.Response) => {
  if (err instanceof Error) {
    const errorResponse = { message: err.message };

    res.status(400).json(errorResponse);

    return;
  }

  res.status(500).json({ message: "Internal Server Error" });
});
export { router };
