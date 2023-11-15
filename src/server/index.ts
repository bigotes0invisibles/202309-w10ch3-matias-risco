import morgan from "morgan";
import express from "express";
import app from "./app.js";
import { notFound } from "./middleware/error/errorMiddleware.js";

app.use(express.json());
app.use(morgan("dev"));
app.use(notFound);
