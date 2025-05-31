import cors from "cors";
import bodyParser from "body-parser";
import express, { Application } from "express";
import path from "path";

import userRoute from "../api/user";
import orderRoute from "../api/order";
import adminRoute from "../api/admin";
import driverRoute from "../api/driver";
import productRoute from "../api/product";
import dashboardRoute from "../api/dashboard";
import handleAuthentication from "../middleware/auth/handelAuth";

export default async ({ app }: { app: Application }) => {
  // 1) CORS, JSON, body‐parser, etc.
  app.use(cors({ origin: "*" }));
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // ─────────────────────────────────────────────────────────────────────────────
  // 2) ADD THESE TWO LINES to properly serve /uploads/<filename> from DISK:
  // ─────────────────────────────────────────────────────────────────────────────
  const uploadsFolder = path.join(__dirname, "..", "..", "uploads");
  app.use("/uploads", express.static(uploadsFolder));
  // ─────────────────────────────────────────────────────────────────────────────

  // 3) Your API routes
  app.use("/users", userRoute);
  app.use("/orders", orderRoute);
  app.use("/admins", adminRoute);
  app.use("/drivers", driverRoute);
  app.use("/products", productRoute);
  app.use("/dashboard", dashboardRoute);

  // 4) Authentication middleware (for any routes after this point)
  app.use(handleAuthentication);

  return app;
};
