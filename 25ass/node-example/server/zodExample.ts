import express, { Router, Request, Response } from "express";
import { z } from "zod";

// Define a schema for validation
const dataSchema = z.object({
  name: z.string().min(5),
  email: z.string().email(),
});

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const queryParams = req.query;
  res.send(queryParams);
});

router.post("/", (req: Request, res: Response) => {
  const validationResult = dataSchema.safeParse(req.body);

  if (!validationResult.success) {
    return res
      .status(400)
      .json({ errors: validationResult.error.formErrors.fieldErrors });
  }

  res.send(validationResult.data);
});

router.put("/", (req: Request, res: Response) => {
  res.send(req.body);
});

router.delete("/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  res.send(`Delete data with ID: ${id}`);
});

export default router;
