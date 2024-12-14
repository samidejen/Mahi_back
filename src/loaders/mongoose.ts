import * as mongoose from "mongoose";

import config from "../config/index";

export default async () => {
  const connection = await mongoose.connect(
    "mongodb+srv://birhanudejen617:RSKX9XuGZBlzTTpZ@cluster0.8fzsz.mongodb.net/abstore"
  );
  return connection.connection.db;
};
