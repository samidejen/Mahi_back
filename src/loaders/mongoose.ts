import * as mongoose from "mongoose";

import config from "../config/index";

export default async () => {
  const connection = await mongoose.connect(
    "mongodb://localhost:27017/abstore"
  );
  return connection.connection.db;
};
