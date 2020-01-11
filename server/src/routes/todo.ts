import { Router } from "express";

import Database from "../database";
import dummy from "../database/dummy";

const router = Router();

const db = new Database(dummy);

router.get("/", (req, res) => {
  try {
    return res.status(200).json({ todoDatas: db.todoDatas });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Catch error" });
  }
});

router.post("/", (req, res) => {
  try {
    const { content } = req.body;

    const result = db.insert(content);

    if (result > 0)
      return res.status(200).json({
        message: "Success insert content",
        todoData: { id: result, content }
      });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Catch error" });
  }
});

router.delete("/:id", (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);

    db.delete(id);

    return res.status(200).json({ message: "Success delete data", id });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: "Catch error" });
  }
});

export default router;
