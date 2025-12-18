import express from "express";
import { createServer } from "http";

const app = express();
const server = createServer(app);
// const PORT = process.env.PORT || 7000;

server.listen((PORT: any) => {
  console.log(`Server is running on PORT ${PORT}`);
});
