import * as mongoose from "mongoose";

import config from "../config/index";

export default async () => {
  const connection = await mongoose.connect(
    "mongodb+srv://Sami:Sami@1994@cluster0.0nmsh.mongodb.net/abstore"
  );
  return connection.connection.db;
};
