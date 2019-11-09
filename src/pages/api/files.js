import fs from "fs";

export default (req, res) => {
  //   res.setHeader("Content-Type", "application/json");
  //   res.statusCode = 200;
  //   res.end(JSON.stringify({ name: "Nextjs" }));
  // res.status(200).json({ title: 'Next.js' })

  fs.readdir(__dirname, (err, files) => {
    res.status(200).json({ files });
  });
};
