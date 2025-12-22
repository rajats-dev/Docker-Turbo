import express, { type Request, type Response } from "express";
import { prisma } from "db/client";

const app = express();
app.use(express.json());

app.get("/users", (req: Request, res: Response) => {
  prisma.user
    .findMany()
    .then((user: any) => {
      res.json(user);
    })
    .catch((err: any) => {
      res.status(500).json({ err: err.message });
    });
});

app.post("/user", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ error: "Username and password are required" });
    return;
  }

  prisma.user
    .create({
      data: {
        username,
        password,
      },
    })
    .then((user: any) => {
      res.status(201).json(user);
    })
    .catch((err: any) => {
      res.status(500).json({ error: err.message });
    });
});

app.listen(8000, () => {
  console.log("Server is Running");
});
