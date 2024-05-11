import { PrismaClient } from "@prisma/client";
import { IS_PROD } from "./constants";

export const db = new PrismaClient({
  log: !IS_PROD ? ["query", "info", "warn", "error"] : [],
});
