import dotenv from "dotenv";

import app from "./app.js";
import connectDB from "./config/db.config.js";

dotenv.config();
connectDB();

const PORT = process.env.PORT || 3000;

if (!process.env.JWT_SECRET) {
  console.log("JWT_SECRET Not defined");
  process.exit(1);
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
