import path from "path";

export default ({ env }) => ({
  connection: {
    filename: path.join(
      __dirname,
      "..",
      "..",
      "..",
      env("DATABASE_FILENAME", ".tmp/data.db")
    ),
  },
  useNullAsDefault: true,
});
