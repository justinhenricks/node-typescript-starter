import { describe, test, expect } from "vitest";
import request from "supertest";
import { app } from "../index";

describe("index routes", () => {
  test("GET /", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
  });

  test("sanity", async () => {
    expect(true).toBe(true);
  });
});
