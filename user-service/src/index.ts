import app from "./app.ts";
import { connectDB } from "./db/connection.ts";

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

async function start() {
  await connectDB();
  app.listen(port, () => {
    console.log(`User service listening on port ${port}`);
  });
}

start().catch((err) => {
  console.error("Failed to start server", err);
  process.exit(1);
});
