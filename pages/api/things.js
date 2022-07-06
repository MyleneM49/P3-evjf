// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from "../../db";

export default async function handler(req, res) {
  res.status(200).json(await db.thing.findMany());
}
if (req.method === "POST") {
  //Process a POST request
  res.status(200).json("reloaded");
} else {
  res.status(404).json({ message: `This page is not found.` });
}

// API Routes
// exemple : res.status(200).json({ text: 'Hello' });
