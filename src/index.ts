import "dotenv/config";
import express, { Request, Response } from "express";

import bodyParser from "body-parser";
const app = express();

import { connect } from "./db";
import { register } from "./register";
import { User } from "./models/user";

app.set('json spaces', 2)

connect().then(() => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.get("/", async (req: Request, res: Response) => {
    console.log(`Instance update: ${Math.random()}`);
    res.header("Content-Type",'application/json');
    return res.send(`Instance update: ${Math.random()}`);
  });

  app.get("/users", async (req: Request, res: Response) => {
    const users = await User.find().select("firstName lastName");
    res.header("Content-Type",'application/json');
    return res.send(users);
  });

  app.post("/register", register);
  
  console.log(`------------Application: ${process.env.APPLICATION} Initialized and Running----------------`)
  app.listen(80);
});
